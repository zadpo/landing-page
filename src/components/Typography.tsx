import React from "react";
import { cn } from "@/lib/utils";
import { DetailedHTMLProps, HTMLAttributes } from "react";

type TypographyProps = {
  children?: React.ReactNode;
  variant: keyof typeof variantClassName;
} & (
  | DetailedHTMLProps<HTMLAttributes<HTMLSpanElement>, HTMLSpanElement>
  | DetailedHTMLProps<HTMLAttributes<HTMLParagraphElement>, HTMLParagraphElement>
  | DetailedHTMLProps<HTMLAttributes<HTMLHeadingElement>, HTMLHeadingElement>
);

type TypographyWithHTMLProps = {
  htmlContent: string;
  variant: keyof typeof variantClassName;
} & (
  | DetailedHTMLProps<HTMLAttributes<HTMLSpanElement>, HTMLSpanElement>
  | DetailedHTMLProps<HTMLAttributes<HTMLParagraphElement>, HTMLParagraphElement>
  | DetailedHTMLProps<HTMLAttributes<HTMLHeadingElement>, HTMLHeadingElement>
);

const Typography: React.FC<TypographyProps> = ({ children, variant, ...rest }) => {
  const className = variantClassName[variant];

  switch (variant) {
    case "h1":
    case "h2":
    case "h3":
    case "h4":
    case "h5":
    case "h6":
      return React.createElement(
        variant,
        {
          ...rest,
          className: cn("text-baseblack-950", className, rest.className ?? ""),
        },
        children
      );
    case "paragraph_xs":
    case "paragraph_sm":
    case "paragraph_md":
    case "paragraph_lg":
    case "paragraph_xl":
      return (
        <p
          {...(rest as DetailedHTMLProps<HTMLAttributes<HTMLParagraphElement>, HTMLParagraphElement>)}
          className={cn("text-baseblack-950", className, rest.className ?? "")}
        >
          {children}
        </p>
      );
    case "overline":
    default:
      return (
        <span
          {...(rest as DetailedHTMLProps<HTMLAttributes<HTMLSpanElement>, HTMLSpanElement>)}
          className={cn("text-baseblack-950", className, rest.className ?? "")}
        >
          {children}
        </span>
      );
  }
};

const TypographyWithHTML: React.FC<TypographyWithHTMLProps> = ({ htmlContent, variant, ...rest }) => {
  const className = variantClassName[variant];

  switch (variant) {
    case "h1":
    case "h2":
    case "h3":
    case "h4":
    case "h5":
    case "h6":
      return React.createElement(variant, {
        ...rest,
        className: cn("text-baseblack-950", className, rest.className ?? ""),
        dangerouslySetInnerHTML: { __html: htmlContent },
      });
    case "paragraph_xs":
    case "paragraph_sm":
    case "paragraph_md":
    case "paragraph_lg":
    case "paragraph_xl":
      return (
        <p
          {...(rest as DetailedHTMLProps<HTMLAttributes<HTMLParagraphElement>, HTMLParagraphElement>)}
          className={cn("text-baseblack-950", className, rest.className ?? "")}
          dangerouslySetInnerHTML={{ __html: htmlContent }}
        />
      );
    case "overline":
    default:
      return (
        <span
          {...(rest as DetailedHTMLProps<HTMLAttributes<HTMLSpanElement>, HTMLSpanElement>)}
          className={cn("text-baseblack-950", className, rest.className ?? "")}
          dangerouslySetInnerHTML={{ __html: htmlContent }}
        />
      );
  }
};

const variantClassName = {
  h6: `lg:text-[32px] lg:leading-8
  text-lg leading-6 font-PlusJakarta`,
  h5: `lg:text-[26px] lg:leading-10
  text-xl leading-8 font-PlusJakarta`,
  h4: `xl:text-[34px] xl:leading-[44px]
  lg:text-3xl
  text-2xl leading-10 font-PlusJakarta`,
  h3: `2xl:text-[40px] 2xl:leading-[56px]
  xl:text-4xl xl:leading-[48px]
  lg:text-[32px] lg:leading-[44px]
  text-[28px] leading-[44px] font-PlusJakarta`,
  h2: `2xl:text-[46px] 2xl:leading-[60px]
  xl:text-[42px]
  lg:text-[38px] lg:leading-[52px]
  text-[32px] leading-[44px] font-PlusJakarta`,
  h1: `2xl:text-[66px] 2xl:leading-[88px] 
  xl:text-[58px] xl:leading-[76px]
  lg:text-[52px] lg:leading-[68px]
  text-4xl leading-[56px] font-PlusJakarta`,
  paragraph: `font-inter text-xs leading-6
  sm:text-sm
  md:text-base md:leading-8
  lg:text-lg
  xl:text-2xl xl:leading-10`,
  paragraph_xs: "text-xs leading-6 font-inter",
  paragraph_sm: "text-sm leading-6 font-inter",
  paragraph_md: "text-base leading-8 font-inter",
  paragraph_lg: "text-lg leading-8 font-inter",
  paragraph_xl: "text-2xl leading-10 font-inter",
  overline: "text-[14px] lg:text-[16px] leading-[24px] font-bold tracking-[3.2px] font-inter uppercase",
};

export { Typography, TypographyWithHTML };
