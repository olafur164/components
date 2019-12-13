import * as React from "react";
import * as variables from "variables";
import { Waypoint } from "react-waypoint";
import { Stores } from "store";
import styled from "styled-components";
import LazyLoad from "react-lazyload";
import Toggle from "components/GSAP/Toggle";
import loadable from "@loadable/component";
const ClickableAnchor = loadable(() => import("components/Clickable/Anchor"));

const ResponsiveImage = loadable(() =>
  import(
    /* webpackChunkName: "responsive-image" */ "components/ResponsiveImage"
  )
);

// ========================
// Components
// ========================

const StyledTextImageXLSection = styled.section`
  position: relative;
  .text-image-title {
    margin-bottom: 3rem;
  }

  .overlay-col-wrapper {
    display: flex;
    justify-content: flex-end;
  }

  .text-content-wrapper {
    margin-left: -0.75rem;
  }
`;

const CardSliceWrapper = styled.div<{
  alignment: string;
  overlayImage?: boolean;
}>`
  width: 200%;
  height: 200%;
  position: absolute;
  background: ${variables.white};

  left: ${props => (props.alignment === "left" ? "100%" : "-200%")};
  bottom: ${props => (props.alignment === "left" ? "unset" : "-50%")};
  transform-origin: ${props =>
    props.alignment === "left" ? "top left" : "bottom right"};
  transform: rotate(${variables.skew}deg);

  @media (max-width: ${variables.mobileMax}) {
    ${(props: any) =>
      props.overlayImage
        ? `
      left: -180%;
      bottom: -10%;
      `
        : "transform: rotate(0deg);"}
  }
`;

const CardDescription = styled.div`
  flex-grow: 1;
  word-break: break-word;
  color: ${variables.body};
  margin-bottom: 2.5rem;
`;

const ImageWrapper = styled.div<{ overlayImage?: boolean }>`
  height: 100%;
  position: relative;
  overflow: hidden;
  width: ${props => !props.overlayImage && "100%"};
  background-color: ${variables.drawerGray};
  ${props => props.overlayImage && "width: 85%; float: right;"}

  @media (max-width: ${variables.mobileMax}) {
    ${props => props.overlayImage && "width: 95%; min-height: 20rem;"}
  }
`;

const TextImageXLSectionTitle = styled.h1<{ backgroundColor: string }>`
  color: ${variables.marelPrimaryBrandColor};
  @media (min-width: ${variables.desktopMin}) {
    margin-top: 7.5rem;
  }
  margin-bottom: 3rem;
  .colored-text {
    color: ${props =>
      props.backgroundColor
        ? props.backgroundColor
        : variables.marelPrimaryBrandColor};
  }
  @media (max-width: ${variables.tabletMax}) {
    margin-bottom: 2rem;
  }
`;

const StyledImage = styled.div`
  width: 100%;
  height: 100%;
  .responsive-image {
    width: 100%;
    height: 100%;
    min-height: 31.25rem;

    @media (max-width: ${variables.tabletMax}) {
      width: 100%;
      min-height: 21.5rem;
    }
  }
`;

const OverlayImage = styled.div<{ src: string }>`
  background-image: url(${props => props.src});
  background-position: 100%;
  background-size: contain;
  background-repeat: no-repeat;
  width: 100%;
  height: 95%;
  position: absolute;
  top: 0;
  right: 0;
  @media (max-width: ${variables.desktopMin}) {
    background-position: bottom right;
  }
`;

const TextWrapper = styled.div<{ overlayImage?: boolean }>`
  margin-top: ${(props: { overlayImage?: boolean }) =>
    props.overlayImage ? "9rem" : "7.5rem"};
  margin-bottom: ${(props: { overlayImage?: boolean }) =>
    props.overlayImage ? "9rem" : "8rem"};

  @media (max-width: ${variables.tabletMax}) {
    margin-top: 8rem;
  }
  @media (max-width: ${variables.mobileMax}) {
    margin-top: 4rem;
    margin-bottom: 0;
  }
`;

// ========================
// Interfaces
// ========================
interface IStyledTextImageXLSectionProps {
  src: string;
  alt: string;
  title: string;
  description: string;
  urlToPage: string;
  alignment: "left" | "right";
  color: string;
  buttonText?: string;
  linkTarget?: "_blank" | "_self" | "";
  overlayImage?: boolean;
  srcTablet?: string;
  srcMobile?: string;
  placeholderDesktop?: string;
  placeholderTablet?: string;
  placeholderMobile?: string;
  sectionId?: string;
  containImage?: boolean;
}

function getClasses(alignment: string, element: string, overlay: boolean) {
  if (alignment === "left" && element === "image") {
    return `order-lg-1 ${!overlay && "offset-lg-1"}`;
  } else if (alignment === "left" && element === "text") {
    return "order-lg-2 offset-lg-1";
  } else if (alignment === "right" && element === "image") {
    return `order-lg-2 order-md-2 ${!overlay && "offset-lg-1"}`;
  } else if (alignment === "right" && element === "text") {
    return "order-lg-1 order-md-1 offset-lg-1";
  }
  return "";
}

/**
 * A component that contains an image and a text block XL.
 */
const TextImageXLSection: React.FC<IStyledTextImageXLSectionProps> = ({
  src,
  alt,
  title,
  description,
  urlToPage,
  alignment,
  color,
  buttonText,
  overlayImage,
  srcTablet,
  srcMobile,
  sectionId,
  placeholderDesktop,
  placeholderMobile,
  placeholderTablet,
  containImage,
  linkTarget
}) => {
  const { dictionary } = React.useContext(Stores);
  const [show, toggleShow] = React.useState(false);

  return (
    <StyledTextImageXLSection
      className="text-image-section-with-slash"
      data-alignment={alignment}
      data-state-show={show}
      data-overlay-image={overlayImage}
    >
      <div className="section-nav-offset" id={sectionId} />
      <Waypoint
        topOffset="-30%"
        bottomOffset="30%"
        onEnter={() => toggleShow(true)}
        scrollableAncestor={window}
      />
      <div className="row">
        <div
          className={`${
            overlayImage ? "col-lg-7" : "col-lg-6"
          } col-md-3 col-sm-4 overlay-col-wrapper ${getClasses(
            alignment,
            "image",
            overlayImage || false
          )}`}
        >
          {overlayImage && (
            <Toggle preset={"overlay"} show={show}>
              <LazyLoad height={0} offset={variables.lazyLoadOffset} once>
                <OverlayImage
                  src={src}
                  aria-label={alt}
                  className="overlay-image"
                />
              </LazyLoad>
            </Toggle>
          )}
          <ImageWrapper className={`img-wrapper`} overlayImage={overlayImage}>
            <Toggle
              preset={alignment === "left" ? "cardsliceLeft" : "cardsliceRight"}
              show={show}
            >
              <CardSliceWrapper
                className="card-slice-wrapper"
                alignment={alignment}
                overlayImage={overlayImage}
              />
            </Toggle>
            {!overlayImage && (
              <StyledImage className="styled-image" aria-label={alt}>
                <ResponsiveImage
                  alt={alt}
                  src={src}
                  srcTablet={srcTablet}
                  srcMobile={srcMobile}
                  placeholderDesktop={placeholderDesktop}
                  placeholderTablet={placeholderTablet}
                  placeholderMobile={placeholderMobile}
                  containImage={containImage}
                />
              </StyledImage>
            )}
          </ImageWrapper>
        </div>
        <div
          className={`col-lg-6 col-md-4 col-sm-4 ${getClasses(
            alignment,
            "text",
            overlayImage
          )}`}
        >
          <TextWrapper className="text-wrapper" overlayImage={overlayImage}>
            <Toggle preset="title" show={show}>
              <TextImageXLSectionTitle
                className="xlarge text-image-title"
                backgroundColor={color}
                dangerouslySetInnerHTML={{ __html: title }}
              />
            </Toggle>
            <div className="col-lg-13 text-content-wrapper">
              <Toggle preset="body" show={show}>
                <CardDescription
                  className="body card-description rich-text"
                  dangerouslySetInnerHTML={{ __html: description }}
                />
              </Toggle>
              {urlToPage && (
                <Toggle preset="cta" show={show}>
                  <ClickableAnchor
                    uppercase
                    icon="arrow"
                    href={urlToPage}
                    color={color || "page-color"}
                    target={linkTarget}
                  >
                    {buttonText
                      ? buttonText
                      : dictionary["Read_More_Text"] || "Read more"}
                  </ClickableAnchor>
                </Toggle>
              )}
            </div>
          </TextWrapper>
        </div>
      </div>
    </StyledTextImageXLSection>
  );
};

export default TextImageXLSection;
