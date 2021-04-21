import React, { useState, useEffect, useRef } from "react";
import {
  Menu,
  Dropdown,
  message,
  Modal,
  Form,
  Switch,
  Input,
  FormInstance,
} from "antd";

import "./index.less";
import { getTheme } from "@utils/changeThemes";
import {
  markdownParserResume,
  downloadDirect,
  downloadFetch,
} from "@utils/helper";
import { getPdf } from "@src/service/htmlToPdf";
import { useStores } from "@src/store";
import { mdEditorRef } from "@src/utils/global";
import svgMap from "@src/utils/svgMap";
import { LOCAL_STORE } from "@src/utils/const";

const themes = [
  {
    id: "default",
    defaultColor: "#000",
    name: "极简色",
    src: "https://s3.qiufengh.com/muji/WechatIMG2703.png",
    isColor: true,
    defaultUrl: "https://s3.qiufengh.com/muji/template/template2.pdf",
  },
];

const default_theme = themes[0].id;

const HeaderBar = () => {
  const { templateStore } = useStores();
  const [template, setTemplate] = useState(default_theme);
  const [isExportVisible, setIsExportVisible] = useState(false);

  const formRef = useRef<FormInstance>(null);

  const uploadMdFile = (e: any) => {
    let resultFile = e.target.files[0];
    var reader = new FileReader();
    reader.readAsText(resultFile);
    reader.onload = (e) => {
      if (e.target?.result) {
        mdEditorRef && mdEditorRef.setValue(e.target.result);
      }
    };
  };

  const exportMdFile = (fileName: string = "web前端开发 梁智恒Hanson") => {
    const file = new Blob([templateStore.mdContent]);
    const url = URL.createObjectURL(file);
    downloadDirect(url, `${fileName}.md`);
  };

  const filesMenu = (
    <Menu>
      <Menu.Item>
        <label htmlFor="uploadMdFile">
          <a rel="noopener noreferrer">导入md</a>
          <input
            type="file"
            id="uploadMdFile"
            accept=".md"
            className="uploadMd"
            onChange={uploadMdFile}
          ></input>
        </label>
      </Menu.Item>
      <Menu.Item>
        <a rel="noopener noreferrer" onClick={() => exportMdFile()}>
          导出md
        </a>
      </Menu.Item>
    </Menu>
  );

  const handleExport = () => {
    formRef.current?.submit();
    setIsExportVisible(false);
  };

  const exportPdf = async ({
    name,
    isOnePage,
    isMark,
  }: {
    name: string;
    isOnePage: boolean;
    isMark: boolean;
  }) => {
    const content = localStorage.getItem(LOCAL_STORE.MD_RESUME);
    if (content) {
      const htmlContent = markdownParserResume
        .render(content)
        .replace(/(\n|\r)/g, "");
      const theme = template;
      let hide = message.loading("正在为你生成简历...", 0);
      const themeColor = getComputedStyle(document.body).getPropertyValue(
        "--bg"
      );
      try {
        let data = await getPdf({
          htmlContent,
          theme,
          themeColor,
          isMark,
          isOnePage,
        });
        await downloadFetch(
          data.url,
          name ? `${name}.pdf` : "web前端开发 梁智恒Hanson.pdf"
        );
        hide();
        message.success("恭喜你，导出成功!");
      } catch (e) {
        hide();
        message.error("生成简历出错，请稍再试!");
      }
    }
  };

  useEffect(() => {
    getTheme(default_theme);
  }, []);
  return (
    <div className="rs-header-bar rs-link">
      <div className="rs-header-bar__left">
        <a className="rs-logo rs-link">✍️ 木及简历(Hanson Forked 版)</a>
        <Dropdown overlay={filesMenu} trigger={["click"]}>
          <a
            className="ant-dropdown-link rs-link"
            onClick={(e) => e.preventDefault()}
          >
            文件
          </a>
        </Dropdown>
        <a href="#/preview" className="rs-link">
          预览
        </a>
      </div>
      <div className="rs-header-bar__right">
        <a
          className="ant-dropdown-link rs-link"
          href="https://github.com/mrhanson/react-resume-site"
          target="_blank"
          dangerouslySetInnerHTML={{
            __html: svgMap["github"],
          }}
        ></a>
      </div>
    </div>
  );
};

export default HeaderBar;
