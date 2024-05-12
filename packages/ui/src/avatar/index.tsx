"use client";

import { forwardRef, useState } from "react";

import { cn } from "../lib";

import type {
  AvatarGroupProps,
  AvatarPlaceholderProps,
  AvatarProps,
} from "./types";

/**
 * Avatar component
 * @param AvatarProps - Uses all HTMLSpanElement attributes
 * @param AvatarProps.children - No children allowed
 * @param AvatarProps.className - The additional class name of the Avatar. (additional class will get merged by cn())
 * @param AvatarProps.fallback - The fallback character for the Avatar. (default: first character of the name)
 * @param AvatarProps.fallbackClassName - The additional class name of the fallback character. (additional class will get merged by cn())
 * @param AvatarProps.imageClassName - The additional class name of the image. (additional class will get merged by cn())
 * @param AvatarProps.name - The name of the Avatar for accessibility. Used for the fallback character, label and alt.
 * @param AvatarProps.NextImage - If you are want to use the next/image component, you pass it thou the NextImage. (default: undefined [use img instead of NextImage])
 * @param AvatarProps.placeholder - If true, the Avatar will be a placeholder. (default: false)
 * @param AvatarProps.src - The source of the Avatar. (default: undefined)
 * @returns JSX.Element
 * @example
 *   <Avatar name="John Doe" src="https://example.com/john-doe.jpg"/>
 */
const Avatar = forwardRef<
  HTMLSpanElement,
  AvatarPlaceholderProps | AvatarProps
>(
  (
    {
      children,
      className,
      fallback,
      fallbackClassName,
      imageClassName,
      name,
      NextImage,
      placeholder,
      src,
      ...rest
    },
    ref
  ) => {
    if (children) return null;
    if (placeholder)
      return (
        <span
          className={cn(
            "relative flex h-10 w-10 shrink-0 overflow-hidden rounded-full border border-white/15",
            className
          )}
          ref={ref}
          {...rest}
        />
      );
    const [avatarHasFailedToLoad, setAvatarHasFailedToLoad] =
      useState<boolean>(false);
    return (
      <span
        aria-label={`Avatar for ${name}`}
        className={cn(
          "border-gray- relative flex h-10 w-10 shrink-0 overflow-hidden rounded-full border",
          className
        )}
        ref={ref}
        {...rest}
      >
        {avatarHasFailedToLoad ? (
          <span
            aria-label="Fallback avatar"
            className={cn(
              "flex h-full w-full items-center justify-center rounded-full bg-gray-100 font-medium text-gray-700",
              fallbackClassName
            )}
          >
            {fallback ?? name.charAt(0)}
          </span>
        ) : NextImage ? (
          <NextImage
            alt={name}
            className={cn(
              "aspect-square h-full w-full object-cover",
              imageClassName
            )}
            fill
            onError={() => {
              setAvatarHasFailedToLoad(true);
            }}
            onLoad={() => {
              setAvatarHasFailedToLoad(false);
            }}
            sizes="100px"
            src={src}
          />
        ) : (
          <img
            alt={name}
            className={cn(
              "aspect-square h-full w-full object-cover",
              imageClassName
            )}
            onError={() => {
              setAvatarHasFailedToLoad(true);
            }}
            onLoad={() => {
              setAvatarHasFailedToLoad(false);
            }}
            src={typeof src === "string" ? src : undefined}
          />
        )}
      </span>
    );
  }
);
Avatar.displayName = "Avatar";

/**
 * AvatarGroup component
 * @param AvatarGroupProps - Uses all HTMLDivElement attributes
 * @param AvatarGroupProps.children - No children allowed
 * @param AvatarGroupProps.className - The additional class name of the AvatarGroup. (additional class will get merged by cn())
 * @param AvatarGroupProps.fallbackClassName - The additional class name of the fallback character. (additional class will get merged by cn())
 * @param AvatarGroupProps.groupClassName - The additional class name of the group. (additional class will get merged by cn())
 * @param AvatarGroupProps.groupItemClassName - The additional class name of the group item. (additional class will get merged by cn())
 * @param AvatarGroupProps.imageClassName - The additional class name of the image. (additional class will get merged by cn())
 * @param AvatarGroupProps.limit - The limit of the members. (default: undefined)
 * @param AvatarGroupProps.members - The members of the group. (default: [])
 * @param AvatarGroupProps.NextImage - If you are want to use the next/image component, you pass it thou the NextImage. (default: undefined [use img instead of NextImage])
 * @returns JSX.Element
 * @example
 *   <AvatarGroup
 *     members={[
 *       { name: "John Doe", src: "https://example.com/john-doe.jpg" },
 *       { name: "Jane Doe", src: "https://example.com/jane-doe.jpg" },
 *     ]}
 *   />
 */
const AvatarGroup = forwardRef<HTMLDivElement, AvatarGroupProps>(
  (
    {
      className,
      fallbackClassName,
      groupClassName,
      groupItemClassName,
      imageClassName,
      limit,
      members,
      NextImage,
      ...rest
    },
    ref
  ) => {
    return (
      <div
        className={cn("flex items-center", groupClassName)}
        ref={ref}
        {...rest}
      >
        {members.map((member, index) => {
          if (limit && index > limit) return null;
          if (limit === index) {
            return (
              <span
                className={cn(
                  "relative -ml-2.5 inline-flex items-center",
                  groupItemClassName
                )}
                key={"More members"}
              >
                <Avatar
                  className={`${className} opacity-0`}
                  fallback={member.fallback}
                  fallbackClassName={fallbackClassName}
                  imageClassName={imageClassName}
                  key={member.name}
                  name={member.name}
                  NextImage={NextImage}
                  src={member.src}
                />
                <span
                  className={cn(
                    "text-gray-1000 absolute flex h-[calc(100%-2px)] w-[calc(100%-2px)] scale-[1.01] items-center justify-center rounded-full border border-gray-400 bg-gray-100 text-sm font-semibold"
                  )}
                  key={"More members"}
                >
                  +{members.length - limit}
                </span>
              </span>
            );
          }

          return (
            <span
              className={cn(
                "inline-flex items-center [&:nth-child(n+2)]:-ml-2.5",
                groupItemClassName
              )}
              key={member.name}
            >
              <Avatar
                className={className}
                fallback={member.fallback}
                fallbackClassName={fallbackClassName}
                imageClassName={imageClassName}
                key={member.name}
                name={member.name}
                NextImage={NextImage}
                src={member.src}
              />
            </span>
          );
        })}
      </div>
    );
  }
);

export { Avatar, AvatarGroup };
