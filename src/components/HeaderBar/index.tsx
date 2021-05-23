/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useEffect } from "react";
import { Menu, Dropdown } from "antd";

import "./index.less";
import { getTheme } from "@utils/changeThemes";
import { downloadDirect } from "@utils/helper";
import { useStores } from "@src/store";
import { mdEditorRef } from "@src/utils/global";
import svgMap from "@src/utils/svgMap";

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

  const exportMdFile = (fileName: string = "前端开发_梁智恒Hanson") => {
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
          rel="noreferrer"
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
