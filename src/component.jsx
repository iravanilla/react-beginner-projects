import React from 'react';
import './index.scss';
import './slider.scss';
import './burger-menu.scss';
import { useReducer, useState } from 'react';
import { useSpring, animated } from 'react-spring';
import Slide1 from './image/slide1.png';
import Slide2 from './image/slide2.png';
import Slide3 from './image/slide3.png';

function reducer(state, action) {
    switch (action.type) {
        case 'level_1': {
            return {
                class_123: '#7A0BC0',
                class_456: '#fff',
                class_789: '#fff',
                class_circle: '#7A0BC0',
                color_button_1: '#7A0BC0',
                class_arrow: 'StyledArrow-1',
            };
        }
        case 'level_2': {
            return {
                class_123: '#0B8AC0',
                class_456: '#0B8AC0',
                class_789: '#fff',
                class_circle: '#0B8AC0',
                color_button_2: '#0B8AC0',
                class_arrow: 'StyledArrow-2',
            };
        }
        case 'level_3': {
            return {
                class_123: '#E105E5',
                class_456: '#E105E5',
                class_789: '#E105E5',
                class_circle: '#E105E5',
                color_button_3: '#E105E5',
                class_arrow: 'StyledArrow-3',
            };
        }
        default: {
            return state;
        }
    }
}

const images = [
    Slide1,
    Slide2,
    Slide3,
];

export const Component = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);

  const handleToggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  const [showPage2, setShowPage2] = useState(false);

  const springProps = useSpring({
    transform: `translateX(${showPage2 ? '-100%' : '0%'})`,
  });

  const handleButtonClick = () => {
    setShowPage2(!showPage2);
  };

  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

const [state, dispatch] = useReducer(reducer, {
        class_123: 'purple',
        class_456: 'white',
        class_789: 'white',
        class_circle: 'purple',
        class_arrow: 'StyledArrow-1',
    });

  return (
    <div className="App">
    <div className="StyledBurgerMenuContainer__icon" onClick={handleToggleMenu}>
        <div className="StyledBurgerMenuContainer__icon-bar"></div>
        <div className="StyledBurgerMenuContainer__icon-bar"></div>
        <div className="StyledBurgerMenuContainer__icon-bar"></div>
    </div>
    <div className={`StyledBurgerMenuContainer ${isMenuOpen ? 'open' : ''}`}>
      <div className="StyledBurgerMenuContainer__content" onClick={handleToggleMenu}>
        <div class="StyledCross">
          <div class="StyledCross__horizontal-line"></div>
          <div class="StyledCross__vertical-line"></div>
      </div>
        <div className="StyledBurgerMenuContainer__content-item">Menu 1
            <div className="StyledBurgerMenuContainer__content-item-go">GO</div>
        </div>
        <div className="StyledBurgerMenuContainer__content-item">Menu 2
            <div className="StyledBurgerMenuContainer__content-item-go">GO</div>
        </div>
        <div className="StyledBurgerMenuContainer__content-item">Menu 3
            <div className="StyledBurgerMenuContainer__content-item-go">GO</div>
        </div>
        <div className="StyledBurgerMenuContainer__content-item">Menu 4
            <div className="StyledBurgerMenuContainer__content-item-go">GO</div>
        </div>
        <div className="StyledBurgerMenuContainer__content-telephone">8 800 000 00 00</div>
      </div>
    </div>
      <div className="StyledContainer">
    <div className="StyledSliderContainer">
      <animated.div className="StyledSliderContainer__content" style={springProps}>
        <div className="StyledImage StyledImage-1" />
        <div className="StyledImage StyledImage-2" />

        <div className="Styled__page Styled__page-1">
                  <div className="StyledContainer__mainblock">
          <div className="StyledContainer__mainblock__info">
            <div className="StyledContainer__mainblock__info-title">
              Bibendum neque egestas congue
            </div>
            <div className="StyledContainer__mainblock__info-text">
              lacus sed viverra tellus in hac habitasse platea dictumst
              vestibulum rhoncus est pellentesque elit ullamcorper dignissim
              cras tincidunt lobortis feugiat
            </div>
            <div key={3}>
              <button className="StyledContainer__mainblock__info-button" onClick={handleButtonClick}/>
            </div>
          </div>
          <div className="StyledContainer__speedblock">
            <div>
              <svg
                width="467"
                height="467"
                viewBox="0 0 467 467"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g filter="url(#filter0_d_2547_60)">
                  <circle cx="233.5" cy="233.5" r="185.5" fill="black" />
                </g>
                <g filter="url(#filter1_d_2547_60)">
                  <circle
                    cx="233.5"
                    cy="232.952"
                    r="155.908"
                    stroke="#505050"
                    stroke-width="32.8804"
                    stroke-miterlimit="15.9925"
                    stroke-dasharray="5.48 5.48"
                    shape-rendering="crispEdges"
                  />
                </g>
                <g filter="url(#filter2_d_2547_60)">
                  <path
                    className="path3"
                    d="M388.857 218.421C391.812 247.995 386.29 277.799 372.938 304.351L344.953 290.279C355.634 269.037 360.051 245.194 357.688 221.535L388.857 218.421Z"
                    fill={state.class_123}
                  />
                  <path
                    className="path2"
                    d="M342.459 121.955C363.719 142.724 378.63 169.114 385.452 198.041L354.964 205.231C349.506 182.089 337.577 160.977 320.569 144.362L342.459 121.955Z"
                    fill={state.class_123}
                  />
                  <path
                    className="path1"
                    d="M244.791 77.8104C274.428 80.0459 302.817 90.6677 326.642 108.435L307.916 133.546C288.855 119.332 266.144 110.835 242.435 109.046L244.791 77.8104Z"
                    fill={state.class_123}
                  />
                  <path
                    className="path9"
                    d="M141.809 106.659C165.972 89.3526 194.56 79.2783 224.234 77.6128L225.989 108.888C202.25 110.22 179.379 118.28 160.049 132.125L141.809 106.659Z"
                    fill={state.class_789}
                  />
                  <path
                    className="path8"
                    d="M81.3011 195.067C88.6872 166.278 104.112 140.185 125.774 119.836L147.221 142.667C129.892 158.946 117.552 179.82 111.643 202.851L81.3011 195.067Z"
                    fill={state.class_789}
                  />
                  <path
                    className="path7"
                    d="M91.8205 301.784C78.9557 274.991 73.9797 245.092 77.4738 215.577L108.581 219.259C105.786 242.871 109.767 266.791 120.058 288.225L91.8205 301.784Z"
                    fill={state.class_789}
                  />
                  <path
                    className="path6"
                    d="M168.416 376.672C141.34 364.414 118.311 344.706 102.019 319.849L128.217 302.677C141.251 322.563 159.674 338.329 181.335 348.135L168.416 376.672Z"
                    fill={state.class_456}
                  />
                  <path
                    className="path5"
                    d="M275.273 384.802C246.655 392.822 216.345 392.534 187.885 383.971L196.91 353.974C219.678 360.825 243.926 361.056 266.821 354.64L275.273 384.802Z"
                    fill={state.class_456}
                  />
                  <path
                    className="path4"
                    d="M362.368 322.291C345.612 346.838 322.217 366.111 294.916 377.859L282.535 349.085C304.376 339.687 323.092 324.269 336.497 304.631L362.368 322.291Z"
                    fill={state.class_456}
                  />
                </g>
                <g className={state.class_arrow} >
                <path
                  d="M255.288 240.202L254.295 243.004L268.045 247.873L269.408 251.557L364.457 285.216L371.184 282.796L367.464 276.724L272.415 243.066L269.037 245.071L255.288 240.202Z"
                  fill="white"
                />
                <path
                  d="M255.623 239.254L185.929 214.574L184.25 219.315L253.945 243.995L254.295 243.004L255.288 240.202L255.623 239.254Z"
                  fill="white"
                />
                <path
                  d="M184.25 219.315L185.929 214.574L183.755 211.67L176.17 208.983L173.127 210.04L171.449 214.782L173.148 217.517L180.733 220.204L184.25 219.315Z"
                  fill="white"
                />
                <path
                  d="M185.929 214.574L255.623 239.254M185.929 214.574L184.25 219.315M185.929 214.574L183.755 211.67L176.17 208.983L173.127 210.04L171.449 214.782L173.148 217.517L180.733 220.204L184.25 219.315M255.623 239.254L253.945 243.995M255.623 239.254L255.288 240.202M253.945 243.995L184.25 219.315M253.945 243.995L254.295 243.004M255.288 240.202L269.037 245.071L272.415 243.066L367.464 276.724L371.184 282.796L364.457 285.216L269.408 251.557L268.045 247.873L254.295 243.004M255.288 240.202L254.295 243.004"
                  stroke="white"
                  stroke-width="1.00593"
                />
                </g>

                <circle cx="232.907" cy="234.093" r="18.9649" fill={state.class_circle} />
                <defs>
                  <filter
                    id="filter0_d_2547_60"
                    x="0.58786"
                    y="0.58786"
                    width="465.824"
                    height="465.824"
                    filterUnits="userSpaceOnUse"
                    color-interpolation-filters="sRGB"
                  >
                    <feFlood flood-opacity="0" result="BackgroundImageFix" />
                    <feColorMatrix
                      in="SourceAlpha"
                      type="matrix"
                      values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                      result="hardAlpha"
                    />
                    <feOffset />
                    <feGaussianBlur stdDeviation="23.7061" />
                    <feComposite in2="hardAlpha" operator="out" />
                    <feColorMatrix
                      type="matrix"
                      values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.7 0"
                    />
                    <feBlend
                      mode="normal"
                      in2="BackgroundImageFix"
                      result="effect1_dropShadow_2547_60"
                    />
                    <feBlend
                      mode="normal"
                      in="SourceGraphic"
                      in2="effect1_dropShadow_2547_60"
                      result="shape"
                    />
                  </filter>
                  <filter
                    id="filter1_d_2547_60"
                    x="57.2368"
                    y="60.6041"
                    width="352.526"
                    height="352.527"
                    filterUnits="userSpaceOnUse"
                    color-interpolation-filters="sRGB"
                  >
                    <feFlood flood-opacity="0" result="BackgroundImageFix" />
                    <feColorMatrix
                      in="SourceAlpha"
                      type="matrix"
                      values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                      result="hardAlpha"
                    />
                    <feOffset dy="3.91557" />
                    <feGaussianBlur stdDeviation="1.95778" />
                    <feComposite in2="hardAlpha" operator="out" />
                    <feColorMatrix
                      type="matrix"
                      values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
                    />
                    <feBlend
                      mode="normal"
                      in2="BackgroundImageFix"
                      result="effect1_dropShadow_2547_60"
                    />
                    <feBlend
                      mode="normal"
                      in="SourceGraphic"
                      in2="effect1_dropShadow_2547_60"
                      result="shape"
                    />
                  </filter>
                  <filter
                    id="filter2_d_2547_60"
                    x="41.6105"
                    y="42.8356"
                    width="382.8"
                    height="382.554"
                    filterUnits="userSpaceOnUse"
                    color-interpolation-filters="sRGB"
                  >
                    <feFlood flood-opacity="0" result="BackgroundImageFix" />
                    <feColorMatrix
                      in="SourceAlpha"
                      type="matrix"
                      values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                      result="hardAlpha"
                    />
                    <feOffset />
                    <feGaussianBlur stdDeviation="17.3886" />
                    <feComposite in2="hardAlpha" operator="out" />
                    <feColorMatrix
                      type="matrix"
                      values="0 0 0 0 0.478431 0 0 0 0 0.0431373 0 0 0 0 0.752941 0 0 0 0.6 0"
                    />
                    <feBlend
                      mode="normal"
                      in2="BackgroundImageFix"
                      result="effect1_dropShadow_2547_60"
                    />
                    <feBlend
                      mode="normal"
                      in="SourceGraphic"
                      in2="effect1_dropShadow_2547_60"
                      result="shape"
                    />
                  </filter>
                </defs>
              </svg>
            </div>
            <div className="StyledContainer__speedblock__level" >
                <button className="StyledContainer__speedblock__level-button level-button-1"
                style={{ backgroundColor: state.color_button_1 }}
                onClick={() => {
                    dispatch({ type: 'level_1' });
                }}>
                  Level 1
                </button>
                <button className="StyledContainer__speedblock__level-button level-button-2"
                style={{ backgroundColor: state.color_button_2 }}onClick={() => {
                    dispatch({ type: 'level_2' });
                }}>
                  Level 2
                </button>
                <button className="StyledContainer__speedblock__level-button level-button-3"
                style={{ backgroundColor: state.color_button_3 }}onClick={() => {
                    dispatch({ type: 'level_3' });
                }}>
                  Level 3
                </button>
            </div>
          </div>
        </div>
        </div>
<div className="Styled__page Styled__page-2">
        <div className="StyledContainer__mainblock page-2">
          <div className="StyledContainer__mainblock__info page-2">
            <div className="StyledContainer__mainblock__info-title">
              PageMaker including versions of Lorem Ipsum.
            </div>
            <div className="StyledContainer__mainblock__info-text">
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing
            </div>
            <div key={3}>
              <button className="StyledContainer__mainblock__info-button-page-2" onClick={handleButtonClick}>BACK
              </button>
            </div>
          </div>
          <div className="StyledContainer__slideblock">

 <div className="StyledCarousel">
      <div className="StyledCarousel__arrow StyledCarousel__arrow-left" onClick={handlePrev}>
        &lt;
      </div>
      <div className="StyledCarousel__content">
        {images.map((url, index) => (
          <div
            key={index}
            className={`StyledCarousel__slide ${index === currentIndex ? 'active' : ''}`}
            style={{ backgroundImage: `url(${url})` }}
          />
        ))}
      </div>
      <div className="StyledCarousel__arrow StyledCarousel__arrow-right" onClick={handleNext}>
        &gt;
      </div>
    </div>

          </div>
        </div>
        </div>
      </animated.div>
    </div>
      </div>
    </div>
  );
}
