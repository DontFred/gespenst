import { cva } from "class-variance-authority";

import { cn } from "../lib";

import type {
  BlockquoteProps,
  DescriptionProps,
  HeadingProps,
  InlineCodeProps,
  LargeProps,
  LeadProps,
  LinkProps,
  ListItemProps,
  ListProps,
  MutedProps,
  ParagraphProps,
  SmallProps,
  TableBodyProps,
  TableCellProps,
  TableHeaderProps,
  TableHeadProps,
  TableProps,
  TableRowProps,
  TypoProps,
} from "./types";

/**
 * Heading 1
 * @param HeadingProps - Has all HTML heading attributes.
 * @param HeadingProps.className - The additional class name of the heading. (additional class will get merged by cn()).
 * @param HeadingProps.children - The text content of the heading. Default is "Heading 1 Placeholder".
 * @param HeadingProps.mono - To change the font to monospace.
 * @param HeadingProps.size - To set the size
 * @param HeadingProps.heading - To set that the Text is a heading text.
 * @returns The heading element.
 * @example
 *  <TypographyH1>
 *      This is a heading 1
 *  </TypographyH1>
 */
export function TypographyH1({
  children = "Heading 1 Placeholder",
  className,
  heading,
  mono,
  size,
  ...rest
}: HeadingProps) {
  if (!heading) {
    return;
  }

  if (size !== "h1") {
    return;
  }

  return (
    <h1
      className={cn(
        "scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl [&:not(:first-child)]:mt-12",
        mono && "font-mono",
        className
      )}
      {...rest}
    >
      {children}
    </h1>
  );
}

/**
 * Heading 2
 * @param HeadingProps - Has all HTML heading attributes.
 * @param HeadingProps.className - The additional class name of the heading. (additional class will get merged by cn()).
 * @param HeadingProps.children - The text content of the heading. Default is "Heading 2 Placeholder".
 * @param HeadingProps.mono - To change the font to monospace.
 * @param HeadingProps.size - To set the size
 * @param HeadingProps.heading - To set that the Text is a heading text.
 * @returns The heading element.
 * @example
 *  <TypographyH2>
 *      This is a heading 2
 *  </TypographyH2>
 */
export function TypographyH2({
  children = "Heading 2 Placeholder",
  className,
  heading,
  mono,
  size,
  ...rest
}: HeadingProps) {
  if (!heading) {
    return;
  }

  if (size !== "h2") {
    return;
  }

  return (
    <h2
      className={cn(
        "scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight first:mt-0 [&:not(:first-child)]:mt-10",
        mono && "font-mono",
        className
      )}
      {...rest}
    >
      {children}
    </h2>
  );
}

/**
 * Heading 3
 * @param HeadingProps - Has all HTML heading attributes.
 * @param HeadingProps.className - The additional class name of the heading. (additional class will get merged by cn()).
 * @param HeadingProps.children - The text content of the heading. Default is "Heading 3 Placeholder".
 * @param HeadingProps.mono - To change the font to monospace.
 * @param HeadingProps.size - To set the size
 * @param HeadingProps.heading - To set that the Text is a heading text.
 * @returns The heading element.
 * @example
 *  <TypographyH3>
 *      This is a heading 3
 *  </TypographyH3>
 */
export function TypographyH3({
  children = "Heading 3 Placeholder",
  className,
  heading,
  mono,
  size,
  ...rest
}: HeadingProps) {
  if (!heading) {
    return;
  }

  if (size !== "h3") {
    return;
  }

  return (
    <h3
      className={cn(
        "scroll-m-20 text-2xl font-semibold tracking-tight [&:not(:first-child)]:mt-8",
        mono && "font-mono",
        className
      )}
      {...rest}
    >
      {children}
    </h3>
  );
}

/**
 * Heading 4
 * @param HeadingProps - Has all HTML heading attributes.
 * @param HeadingProps.className - The additional class name of the heading. (additional class will get merged by cn()).
 * @param HeadingProps.children - The text content of the heading. Default is "Heading 4 Placeholder".
 * @param HeadingProps.mono - To change the font to monospace.
 * @param HeadingProps.size - To set the size
 * @param HeadingProps.heading - To set that the Text is a heading text.
 * @returns The heading element.
 * @example
 *  <TypographyH4>
 *      This is a heading 4
 *  </TypographyH4>
 */
export function TypographyH4({
  children = "Heading 4 Placeholder",
  className,
  heading,
  mono,
  size,
  ...rest
}: HeadingProps) {
  if (!heading) {
    return;
  }

  if (size !== "h4") {
    return;
  }

  return (
    <h4
      className={cn(
        "scroll-m-20 text-xl font-semibold tracking-tight [&:not(:first-child)]:mt-6",
        mono && "font-mono",
        className
      )}
      {...rest}
    >
      {children}
    </h4>
  );
}

/**
 * Paragraph
 * @param ParagraphProps - Has all HTML Paragraph attributes.
 * @param ParagraphProps.className - The additional class name of the Paragraph. (additional class will get merged by cn()).
 * @param ParagraphProps.children - The text content of the Paragraph. Default is "Paragraph Placeholder".
 * @param ParagraphProps.mono - To change the font to monospace.
 * @param ParagraphProps.paragraph - To set that the Text is a paragraph text.
 * @returns A JSX element.
 * @example
 *  <TypographyP>
 *      This is a paragraph
 *  </TypographyP>
 */
export function TypographyP({
  children = "Paragraph Placeholder",
  className,
  mono,
  paragraph,
  ...rest
}: ParagraphProps) {
  if (!paragraph) {
    return;
  }

  return (
    <p
      className={cn(
        "text-base font-normal leading-5 [&:not(:first-child)]:mt-6",
        mono && "font-mono",
        className
      )}
      {...rest}
    >
      {children}
    </p>
  );
}

/**
 * Blockquote
 * @param BlockquoteProps - Has all HTML Blockquote attributes.
 * @param BlockquoteProps.className - The additional class name of the Blockquote. (additional class will get merged by cn()).
 * @param BlockquoteProps.children - The text content of the Blockquote. Default is "Blockquote Placeholder".
 * @param BlockquoteProps.mono - To change the font to monospace.
 * @param BlockquoteProps.blockquote - To set that the Text is a blockquote text.
 * @returns A JSX element.
 * @example
 *  <TypographyBlockquote>
 *      This is a blockquote
 *  </TypographyBlockquote>
 */
export function TypographyBlockquote({
  blockquote,
  children = "Blockquote Placeholder",
  className,
  mono,
  ...rest
}: BlockquoteProps) {
  if (!blockquote) {
    return;
  }

  return (
    <blockquote
      className={cn(
        "mt-6 border-l-2 pl-6 italic",
        mono && "font-mono",
        className
      )}
      {...rest}
    >
      {children}
    </blockquote>
  );
}

/**
 * Table
 * @param TableProps - Has all HTML Table attributes.
 * @param TableProps.className - The additional class name of the Table. (additional class will get merged by cn()).
 * @param TableProps.children - The children of the Table.
 * @param TableProps.container - To change the props of the container div.
 * @returns A JSX element.
 * @example
 *  <Table>
 *    ...
 *  </Table>
 */
export function Table({ children, className, container, ...rest }: TableProps) {
  const { className: containerClassName, ...containerRest } = container ?? {};
  return (
    <div
      className={cn(
        "border-border my-6 w-full overflow-y-auto",
        containerClassName
      )}
      {...containerRest}
    >
      <table className={cn("w-full", className)} {...rest}>
        {children}
      </table>
    </div>
  );
}

/**
 * Table Head
 * @param TableHeadProps - Has all HTML Table Head attributes.
 * @param TableHeadProps.children - The children of the Table Head.
 * @returns A JSX element.
 * @example
 *  <THead>
 *    ...
 *  </THead>
 */
export function THead({ children, ...rest }: TableHeadProps) {
  return <thead {...rest}>{children}</thead>;
}

/**
 * Table Row
 * @param TableRowProps - Has all HTML Table Row attributes.
 * @param TableRowProps.children - The children of the Table Row.
 * @param TableRowProps.className - The additional class name of the Table Row. (additional class will get merged by cn()).
 * @returns A JSX element.
 * @example
 *  <TR>
 *    ...
 *  </TR>
 */
export function TR({ children, className, ...rest }: TableRowProps) {
  return (
    <tr className={cn("even:bg-muted m-0 border-t p-0", className)} {...rest}>
      {children}
    </tr>
  );
}

/**
 * Table Header
 * @param TableHeaderProps - Has all HTML Table Header attributes.
 * @param TableHeaderProps.children - The children of the Table Header.
 * @param TableHeaderProps.className - The additional class name of the Table Header. (additional class will get merged by cn()).
 * @returns A JSX element.
 * @example
 *  <TH>
 *    ...
 *  </TH>
 */
export function TH({ children, className, ...rest }: TableHeaderProps) {
  return (
    <th
      className={cn(
        "border px-4 py-2 text-left font-bold [&[align=center]]:text-center [&[align=right]]:text-right",
        className
      )}
      {...rest}
    >
      {children}
    </th>
  );
}

/**
 * Table Body
 * @param TableBodyProps - Has all HTML Table Body attributes.
 * @param TableBodyProps.children - The children of the Table Body.
 * @returns A JSX element.
 * @example
 *  <TBody>
 *    ...
 *  </TBody>
 */
export function TBody({ children, ...rest }: TableBodyProps) {
  return <tbody {...rest}>{children}</tbody>;
}

/**
 * Table Cell
 * @param TableCellProps - Has all HTML Table Cell attributes.
 * @param TableCellProps.children - The children of the Table Cell.
 * @param TableCellProps.className - The additional class name of the Table Cell. (additional class will get merged by cn()).
 * @returns A JSX element.
 * @example
 *  <TD>
 *    ...
 *  </TD>
 */
export function TD({ children, className, ...rest }: TableCellProps) {
  return (
    <td
      className={cn(
        "border px-4 py-2 text-left [&[align=center]]:text-center [&[align=right]]:text-right",
        className
      )}
      {...rest}
    >
      {children}
    </td>
  );
}

/**
 * List
 * @param ListProps - Has all HTML unordered List attributes.
 * @param ListProps.className - The additional class name of the List. (additional class will get merged by cn()).
 * @param ListProps.children - The children of the List.
 * @param ListProps.mono - To change the font to monospace.
 * @param ListProps.list - To set that the Text is a large text.
 * @returns A JSX element.
 * @example
 *  <TypographyList>
 *      ...
 *  </TypographyList>
 */
export function TypographyList({
  children,
  className,
  list,
  mono,
  ...rest
}: ListProps) {
  if (!list) {
    return;
  }

  return (
    <ul
      className={cn(
        "my-6 ml-6 list-disc [&>li]:mt-2",
        mono && "font-mono",
        className
      )}
      {...rest}
    >
      {children}
    </ul>
  );
}

/**
 * List Item
 * @param ListItemProps - Has all HTML List Item attributes.
 * @param ListItemProps.className - The additional class name of the List Item. (additional class will get merged by cn()).
 * @param ListItemProps.children - The children of the List Item.
 * @param ListItemProps.listItem - To set that the Text is a list item.
 * @returns A JSX element.
 * @example
 *  <TypographyListItem>
 *      ...
 *  </TypographyListItem>
 */
export function TypographyListItem({
  children,
  className,
  listItem,
  ...rest
}: ListItemProps) {
  if (!listItem) {
    return;
  }

  return (
    <li className={className} {...rest}>
      {children}
    </li>
  );
}

/**
 * Inline Code
 * @param InlineCodeProps - Has all HTML Inline Code attributes.
 * @param InlineCodeProps.className - The additional class name of the Inline Code. (additional class will get merged by cn()).
 * @param InlineCodeProps.children - The text content of the Inline Code. Default is "Inline Code Placeholder".
 * @param InlineCodeProps.mono - To change the font to monospace.
 * @param InlineCodeProps.code - To set that the Text is a inline code.
 * @returns A JSX element.
 * @example
 *  <TypographyInlineCode>
 *      This is a Inline Code
 *  </TypographyInlineCode>
 */
export function TypographyInlineCode({
  children = "Inline Code Placeholder",
  className,
  code,
  mono,
  ...rest
}: InlineCodeProps) {
  if (!code) {
    return;
  }

  return (
    <code
      className={cn(
        "bg-muted relative rounded px-[0.3rem] py-[0.2rem] font-mono text-sm font-semibold",
        mono && "font-mono",
        className
      )}
      {...rest}
    >
      {children}
    </code>
  );
}

/**
 * Link
 * @param LinkProps - Has all HTML Span attributes.
 * @param LinkProps.className - The additional class name of the Link. (additional class will get merged by cn()).
 * @param LinkProps.children - The text content of the Link. Default is "Link Placeholder".
 * @param LinkProps.mono - To change the font to monospace.
 * @param LinkProps.link - To set that the Text is a link.
 * @returns A JSX element.
 * @example
 *  <TypographyLink>
 *      This is a Link
 *  </TypographyLink>
 */
export function TypographyLink({
  children = "Link Placeholder",
  className,
  link,
  mono,
  ...rest
}: LinkProps) {
  if (!link) {
    return;
  }

  return (
    <span
      className={cn(
        "cursor-pointer text-blue-700 hover:underline",
        mono && "font-mono",
        className
      )}
      {...rest}
    >
      {children}
    </span>
  );
}

/**
 * Lead
 * @param LeadProps - Has all HTML Lead attributes.
 * @param LeadProps.className - The additional class name of the Lead. (additional class will get merged by cn()).
 * @param LeadProps.children - The text content of the Lead. Default is "Lead Placeholder".
 * @param LeadProps.mono - To change the font to monospace.
 * @param LeadProps.lead - To set that the Text is a lead text.
 * @returns A JSX element.
 * @example
 *  <TypographyLead>
 *      This is a Lead
 *  </TypographyLead>
 */
export function TypographyLead({
  children = "Lead Placeholder",
  className,
  lead,
  mono,
  ...rest
}: LeadProps) {
  if (!lead) {
    return;
  }

  return (
    <p
      className={cn(
        "text-muted-foreground text-xl",
        mono && "font-mono",
        className
      )}
      {...rest}
    >
      {children}
    </p>
  );
}

/**
 * Large
 * @param LargeProps - Has all HTML Large attributes.
 * @param LargeProps.className - The additional class name of the Large. (additional class will get merged by cn()).
 * @param LargeProps.children - The text content of the Large. Default is "Large Placeholder".
 * @param LargeProps.mono - To change the font to monospace.
 * @param LargeProps.large - To set that the Text is a large text.
 * @returns A JSX element.
 * @example
 *  <TypographyLarge>
 *      This is a Large
 *  </TypographyLarge>
 */
export function TypographyLarge({
  children = "Large Placeholder",
  className,
  large,
  mono,
  ...rest
}: LargeProps) {
  if (!large) {
    return;
  }

  return (
    <div
      className={cn("text-lg font-semibold", mono && "font-mono", className)}
      {...rest}
    >
      {children}
    </div>
  );
}

/**
 * Small
 * @param SmallProps - Has all HTML Small attributes.
 * @param SmallProps.className - The additional class name of the Small. (additional class will get merged by cn()).
 * @param SmallProps.children - The text content of the Small. Default is "Small Placeholder".
 * @param SmallProps.mono - To change the font to monospace.
 * @param SmallProps.small - To set that the Text is a small text.
 * @returns A JSX element.
 * @example
 *  <TypographySmall>
 *      This is a Small
 *  </TypographySmall>
 */
export function TypographySmall({
  children = "Small Placeholder",
  className,
  mono,
  small,
  ...rest
}: SmallProps) {
  if (!small) {
    return;
  }

  return (
    <small
      className={cn(
        "text-sm font-medium leading-none",
        mono && "font-mono",
        className
      )}
      {...rest}
    >
      {children}
    </small>
  );
}

/**
 * Muted
 * @param MutedProps - Has all HTML Muted attributes.
 * @param MutedProps.className - The additional class name of the Muted. (additional class will get merged by cn()).
 * @param MutedProps.children - The text content of the Muted. Default is "Muted Placeholder".
 * @param MutedProps.mono - To change the font to monospace.
 * @param MutedProps.muted - To set that the Text is a muted text.
 * @returns A JSX element.
 * @example
 *  <TypographyMuted>
 *      This is a Muted
 *  </TypographyMuted>
 */
export function TypographyMuted({
  children = "Muted Placeholder",
  className,
  mono,
  muted,
  ...rest
}: MutedProps) {
  if (!muted) {
    return;
  }

  return (
    <p
      className={cn(
        "text-muted-foreground text-sm",
        mono && "font-mono",
        className
      )}
      {...rest}
    >
      {children}
    </p>
  );
}

/**
 * Description
 * @param DescriptionProps - Has all HTML Description attributes.
 * @param DescriptionProps.className - The additional class name of the Description. (additional class will get merged by cn()).
 * @param DescriptionProps.children - The text content of the Description. Default is "Description Placeholder".
 * @param DescriptionProps.size - The size of the Description. The size is depending of the heading. Default is "h1".
 * @param DescriptionProps.mono - To change the font to monospace.
 * @param DescriptionProps.description - To set that the Text is a description text.
 * @returns A JSX element.
 * @example
 *  <TypographyDescription>
 *      This is a Description
 *  </TypographyDescription>
 */
export function TypographyDescription({
  children,
  className,
  description,
  mono,
  size,
  ...rest
}: DescriptionProps) {
  if (!description) {
    return;
  }

  const descriptionVariants = cva(
    "text-secondary-foreground font-semibold tracking-tight",
    {
      defaultVariants: {
        size: "h1",
      },
      variants: {
        size: {
          h1: "mt-2 text-xl",
          h2: "mt-2 text-lg",
          h3: "mt-2 text-base",
          h4: "mt-1 text-sm",
        },
      },
    }
  );

  return (
    <div
      className={cn(
        descriptionVariants({ className, size }),
        mono && "font-mono"
      )}
      {...rest}
    >
      {children}
    </div>
  );
}

/**
 * Text
 * @param props - Props for the Text component.
 * @returns A JSX element.
 * @example
 *  <Text paragraph>Hello World</Text>
 *  --> <p className="...">Hello World</p>
 *
 *  <Text heading size="h1">Hello World</Text>
 *  --> <h1 className="...">Hello World</h1>
 */
export function Text(props: TypoProps) {
  if (props.heading) {
    switch (props.size) {
      case "h1":
        return <TypographyH1 {...props} />;
      case "h2":
        return <TypographyH2 {...props} />;
      case "h3":
        return <TypographyH3 {...props} />;
      case "h4":
        return <TypographyH4 {...props} />;
      default:
        return <TypographyH1 {...props} />;
    }
  } else if (props.blockquote) {
    return <TypographyBlockquote {...props} />;
  } else if (props.description) {
    return <TypographyDescription {...props} />;
  } else if (props.code) {
    return <TypographyInlineCode {...props} />;
  } else if (props.paragraph) {
    return <TypographyP {...props} />;
  } else if (props.link) {
    return <TypographyLink {...props} />;
  } else if (props.list) {
    return <TypographyList {...props} />;
  } else if (props.listItem) {
    return <TypographyListItem {...props} />;
  } else if (props.lead) {
    return <TypographyLead {...props} />;
  } else if (props.large) {
    return <TypographyLarge {...props} />;
  } else if (props.muted) {
    return <TypographyMuted {...props} />;
  } else if (props.small) {
    return <TypographySmall {...props} />;
  }
}
