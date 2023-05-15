import React from 'react'
import './header.css';
const Header = ({setMenuOpen}) => {
  return (
    <div className="page-header">
        <div className="page-layout-content">
            <div className="page-layout-image">
                
<svg width="200" height="30" viewBox="0 0 758 73" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M0.87168 71V2.75H26.7717L39.4592 59.45H42.6092L55.2967 2.75H81.1967V71H67.5467V14.825H65.2717L52.8467 71H28.5217L16.0967 14.825H13.8217V71H0.87168ZM111.29 72.3125C105.457 72.3125 101.052 70.475 98.0773 66.8C95.1023 63.125 93.6148 58.1375 93.6148 51.8375V18.5H107.79V49.475C107.79 53.0333 108.432 55.8042 109.715 57.7875C110.998 59.7708 113.069 60.7625 115.927 60.7625C119.369 60.7625 122.023 59.4208 123.89 56.7375C125.757 54.0542 126.69 50.7583 126.69 46.85V18.5H140.865V71H128.09V63.125H125.99C125.115 65.75 123.511 67.9375 121.177 69.6875C118.844 71.4375 115.548 72.3125 111.29 72.3125ZM153.788 71V18.5H166.913V26.375H169.013C170.063 23.75 171.667 21.5625 173.825 19.8125C176.042 18.0625 179.279 17.1875 183.537 17.1875C189.371 17.1875 193.746 19.025 196.662 22.7C199.579 26.375 201.037 31.3625 201.037 37.6625V71H186.862V40.025C186.862 36.4083 186.221 33.6375 184.938 31.7125C183.654 29.7292 181.554 28.7375 178.638 28.7375C175.254 28.7375 172.629 30.0792 170.763 32.7625C168.896 35.3875 167.963 38.6833 167.963 42.65V71H153.788ZM231.11 72.05C226.21 72.05 222.185 70.8833 219.035 68.55C215.885 66.1583 213.552 62.8917 212.035 58.75C210.518 54.6083 209.76 49.9125 209.76 44.6625C209.76 39.2375 210.518 34.4833 212.035 30.4C213.61 26.3167 215.973 23.1375 219.123 20.8625C222.273 18.5875 226.239 17.45 231.023 17.45C234.698 17.45 237.702 18.1792 240.035 19.6375C242.427 21.0375 244.235 22.9333 245.46 25.325H247.56V18.5H260.685V71H247.56V64.175H245.46C244.235 66.3917 242.456 68.2583 240.123 69.775C237.789 71.2917 234.785 72.05 231.11 72.05ZM234.785 62.075C238.343 62.075 241.173 60.5292 243.273 57.4375C245.431 54.2875 246.51 50.0583 246.51 44.75C246.51 39.3833 245.431 35.1542 243.273 32.0625C241.173 28.9708 238.343 27.425 234.785 27.425C231.577 27.425 229.039 28.8833 227.173 31.8C225.364 34.6583 224.46 38.975 224.46 44.75C224.46 50.525 225.364 54.8708 227.173 57.7875C229.039 60.6458 231.577 62.075 234.785 62.075ZM269.24 31.625V31.1C270.756 28.5917 271.981 26.2875 272.915 24.1875C273.906 22.0875 274.694 20.1917 275.277 18.5C273.235 18.0333 271.719 17.1 270.727 15.7C269.735 14.2417 269.24 12.4917 269.24 10.45C269.24 8 269.969 6.01667 271.427 4.5C272.885 2.98333 274.956 2.225 277.64 2.225C280.323 2.225 282.394 3.04166 283.852 4.675C285.31 6.30833 286.04 8.75833 286.04 12.025C286.04 14.8833 285.515 18.0625 284.465 21.5625C283.415 25.0625 282.015 28.4167 280.265 31.625H269.24ZM316.84 72.3125C311.006 72.3125 306.34 71.4083 302.84 69.6C299.398 67.7333 296.86 65.4 295.227 62.6C293.652 59.8 292.748 57 292.515 54.2H305.99C306.281 55.7167 306.894 57.1167 307.827 58.4C308.819 59.625 310.102 60.5875 311.677 61.2875C313.31 61.9875 315.265 62.3375 317.54 62.3375C320.34 62.3375 322.352 61.8708 323.577 60.9375C324.802 59.9458 325.415 58.6917 325.415 57.175C325.415 55.775 324.831 54.6083 323.665 53.675C322.556 52.6833 320.719 51.7792 318.152 50.9625L311.852 48.8625C308.819 47.8125 306.019 46.675 303.452 45.45C300.885 44.1667 298.815 42.5333 297.24 40.55C295.723 38.5667 294.965 36 294.965 32.85C294.965 28.1833 296.744 24.4208 300.302 21.5625C303.86 18.6458 308.906 17.1875 315.44 17.1875C320.165 17.1875 324.015 17.9167 326.99 19.375C330.023 20.8333 332.298 22.7875 333.815 25.2375C335.331 27.6292 336.206 30.2833 336.44 33.2H323.49C323.198 31.1 322.323 29.4958 320.865 28.3875C319.406 27.2208 317.423 26.6375 314.915 26.6375C312.64 26.6375 310.919 27.075 309.752 27.95C308.644 28.825 308.09 30.0208 308.09 31.5375C308.09 33.0542 308.702 34.3083 309.927 35.3C311.152 36.2917 313.019 37.1958 315.527 38.0125L321.827 40.025C324.86 40.9583 327.631 42.0667 330.14 43.35C332.706 44.575 334.748 46.2083 336.265 48.25C337.781 50.2333 338.54 52.8292 338.54 56.0375C338.54 60.9375 336.673 64.875 332.94 67.85C329.265 70.825 323.898 72.3125 316.84 72.3125ZM395.482 72.3125C385.565 72.3125 377.865 69.1917 372.382 62.95C366.957 56.7083 364.244 48.0167 364.244 36.875C364.244 25.85 366.927 17.1875 372.294 10.8875C377.661 4.5875 385.361 1.4375 395.394 1.4375C401.402 1.4375 406.536 2.575 410.794 4.85C415.052 7.06667 418.377 10.1583 420.769 14.125C423.161 18.0917 424.561 22.6417 424.969 27.775H410.357C409.89 22.9917 408.344 19.2583 405.719 16.575C403.094 13.8333 399.682 12.4625 395.482 12.4625C390.173 12.4625 386.177 14.5917 383.494 18.85C380.811 23.1083 379.469 29.1458 379.469 36.9625C379.469 45.0708 380.84 51.1667 383.582 55.25C386.382 59.275 390.319 61.2875 395.394 61.2875C399.769 61.2875 403.24 59.8875 405.807 57.0875C408.432 54.2875 409.948 50.5833 410.357 45.975H424.969C424.561 51.1083 423.161 55.6583 420.769 59.625C418.377 63.5917 415.052 66.7125 410.794 68.9875C406.594 71.2042 401.49 72.3125 395.482 72.3125ZM451.569 72.05C446.669 72.05 442.644 70.8833 439.494 68.55C436.344 66.1583 434.011 62.8917 432.494 58.75C430.977 54.6083 430.219 49.9125 430.219 44.6625C430.219 39.2375 430.977 34.4833 432.494 30.4C434.069 26.3167 436.432 23.1375 439.582 20.8625C442.732 18.5875 446.698 17.45 451.482 17.45C455.157 17.45 458.161 18.1792 460.494 19.6375C462.886 21.0375 464.694 22.9333 465.919 25.325H468.019V18.5H481.144V71H468.019V64.175H465.919C464.694 66.3917 462.915 68.2583 460.582 69.775C458.248 71.2917 455.244 72.05 451.569 72.05ZM455.244 62.075C458.802 62.075 461.632 60.5292 463.732 57.4375C465.89 54.2875 466.969 50.0583 466.969 44.75C466.969 39.3833 465.89 35.1542 463.732 32.0625C461.632 28.9708 458.802 27.425 455.244 27.425C452.036 27.425 449.498 28.8833 447.632 31.8C445.823 34.6583 444.919 38.975 444.919 44.75C444.919 50.525 445.823 54.8708 447.632 57.7875C449.498 60.6458 452.036 62.075 455.244 62.075ZM501.815 71C500.473 69.425 499.394 67.5292 498.577 65.3125C497.819 63.0958 497.44 59.7708 497.44 55.3375V28.475H490.265V18.5H497.615V5.375H511.527V18.5H520.015V28.475H511.527V53.85C511.527 58.4583 512.052 61.9875 513.102 64.4375C514.152 66.8875 515.406 68.9 516.865 70.475V71H501.815ZM577.488 72.3125C567.572 72.3125 559.872 69.1917 554.388 62.95C548.963 56.7083 546.251 48.0167 546.251 36.875C546.251 25.85 548.934 17.1875 554.301 10.8875C559.668 4.5875 567.368 1.4375 577.401 1.4375C583.409 1.4375 588.543 2.575 592.801 4.85C597.059 7.06667 600.384 10.1583 602.776 14.125C605.168 18.0917 606.568 22.6417 606.976 27.775H592.363C591.897 22.9917 590.351 19.2583 587.726 16.575C585.101 13.8333 581.688 12.4625 577.488 12.4625C572.18 12.4625 568.184 14.5917 565.501 18.85C562.818 23.1083 561.476 29.1458 561.476 36.9625C561.476 45.0708 562.847 51.1667 565.588 55.25C568.388 59.275 572.326 61.2875 577.401 61.2875C581.776 61.2875 585.247 59.8875 587.813 57.0875C590.438 54.2875 591.955 50.5833 592.363 45.975H606.976C606.568 51.1083 605.168 55.6583 602.776 59.625C600.384 63.5917 597.059 66.7125 592.801 68.9875C588.601 71.2042 583.497 72.3125 577.488 72.3125ZM633.576 72.05C628.676 72.05 624.651 70.8833 621.501 68.55C618.351 66.1583 616.018 62.8917 614.501 58.75C612.984 54.6083 612.226 49.9125 612.226 44.6625C612.226 39.2375 612.984 34.4833 614.501 30.4C616.076 26.3167 618.438 23.1375 621.588 20.8625C624.738 18.5875 628.705 17.45 633.488 17.45C637.163 17.45 640.168 18.1792 642.501 19.6375C644.893 21.0375 646.701 22.9333 647.926 25.325H650.026V18.5H663.151V71H650.026V64.175H647.926C646.701 66.3917 644.922 68.2583 642.588 69.775C640.255 71.2917 637.251 72.05 633.576 72.05ZM637.251 62.075C640.809 62.075 643.638 60.5292 645.738 57.4375C647.897 54.2875 648.976 50.0583 648.976 44.75C648.976 39.3833 647.897 35.1542 645.738 32.0625C643.638 28.9708 640.809 27.425 637.251 27.425C634.043 27.425 631.505 28.8833 629.638 31.8C627.83 34.6583 626.926 38.975 626.926 44.75C626.926 50.525 627.83 54.8708 629.638 57.7875C631.505 60.6458 634.043 62.075 637.251 62.075ZM679.621 71V28.475H672.271V18.5H679.621V15.35C679.621 12.3167 680.146 9.72083 681.196 7.5625C682.305 5.40417 684.113 3.74167 686.621 2.575C689.188 1.40833 692.659 0.824998 697.034 0.824998C698.726 0.824998 700.388 0.912498 702.021 1.0875V10.7125C701.146 10.5375 700.126 10.45 698.959 10.45C696.976 10.45 695.546 10.8875 694.671 11.7625C693.855 12.5792 693.446 13.95 693.446 15.875V18.5H702.021V28.475H693.446V71H679.621ZM733.05 72.3125C724.766 72.3125 718.437 69.8333 714.062 64.875C709.746 59.9167 707.587 53.1792 707.587 44.6625C707.587 38.9458 708.55 34.0458 710.475 29.9625C712.458 25.8792 715.316 22.7292 719.05 20.5125C722.841 18.2958 727.45 17.1875 732.875 17.1875C740.691 17.1875 746.671 19.55 750.812 24.275C755.012 29 757.112 35.9417 757.112 45.1V48.075H721.412C721.704 52.5083 722.841 56.0083 724.825 58.575C726.866 61.0833 729.608 62.3375 733.05 62.3375C735.791 62.3375 737.979 61.5208 739.612 59.8875C741.304 58.2542 742.412 56.3583 742.937 54.2H756.412C755.887 57.4083 754.721 60.3833 752.912 63.125C751.104 65.8667 748.566 68.0833 745.3 69.775C742.033 71.4667 737.95 72.3125 733.05 72.3125ZM721.412 39.15H743.287C743.054 35.1833 742.062 32.1208 740.312 29.9625C738.562 27.7458 736.054 26.6375 732.787 26.6375C729.579 26.6375 726.983 27.6875 725 29.7875C723.075 31.8292 721.879 34.95 721.412 39.15Z" fill="url(#paint0_linear_52_133)"/>
<defs>
<linearGradient id="paint0_linear_52_133" x1="377" y1="-37" x2="377" y2="94" gradientUnits="userSpaceOnUse">
<stop stop-color="#FB0039"/>
<stop offset="0.583333" stop-color="#FB0039" stop-opacity="0.4"/>
<stop offset="0.994792" stop-color="#F5F5F5"/>
</linearGradient>
</defs>
</svg>

                <div className="page-header-location desktop-only">
                    Whitefield, Bengaluru
                </div>
            </div>
            <div className="menu-hamburger mobile-only"><button type="button" className="btnMenu" onClick={() => setMenuOpen(true)}></button></div>
            <nav className="page-layout-nav desktop-only">
                <ul>
                    <li className="page-layout-nav-item">
                        <a href="#ABOUTUS">About</a>
                    </li>
                    <li className="page-layout-nav-item">
                        <a href="#SERVICES">Services</a>
                    </li>
                    <li className="page-layout-nav-item">
                        <a href="#MENU">Menu</a>
                    </li>
                    <li className="page-layout-nav-item">
                        <a href="#LOCATION">Location</a>
                    </li>
                    <li className="page-layout-nav-item">
                        <a href="#CONTACT">Contact Us</a>
                    </li>
                </ul>
            </nav>
        </div>
    </div>
  )
}

export default Header