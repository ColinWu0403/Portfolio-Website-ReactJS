import React from "react";
import { Link } from "react-router-dom";
import { styles } from "../styles";

const Footer = () => {
  return (
    <footer
      class={`${styles.paddingX} w-full flex item-center justify-center py-5 bottom-0 bg-primary`}
    >
      <div class="flex items-center text-center content-center flex-col">
        <ul class="list-none items-center justify-center flex mb-8 mx-0">
          <li className="mx-5 my-0">
            <a href="https://www.linkedin.com/in/colinwu0403/" target="_blank">
              <img src="linkedin.svg" className="w-[50px] h-[50px]" />
            </a>
          </li>
          <li className="mx-5 my-0">
            <a href="https://github.com/ColinWu0403" target="_blank">
              <img src="github.svg" className="w-[50px] h-[50px]" />
            </a>
          </li>
          <li className="mx-5 my-0">
            <a href="https://devpost.com/ColinWu0403" target="_blank">
              <img src="devpost.svg" className="w-[50px] h-[50px]" />
            </a>
          </li>
          {/* <li className="mx-5 my-0">
            <a href="https://github.com/ColinWu0403" target="_blank">
              <img src="github.svg" className="w-[50px] h-[50px]" />
            </a>
          </li>
          <li className="mx-5 my-0">
            <a href="https://github.com/ColinWu0403" target="_blank">
              <img src="github.svg" className="w-[50px] h-[50px]" />
            </a>
          </li> */}
        </ul>
        <p>
          Copyright &copy; 2024 Colin Wu. Template from <span>JSMastery</span>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
