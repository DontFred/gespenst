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
 * @param Avatar - props of Avatar
 * @returns JSX.Element
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
            className={cn("aspect-square h-full w-full", imageClassName)}
            fill
            onError={() => {
              setAvatarHasFailedToLoad(true);
            }}
            onLoad={() => {
              setAvatarHasFailedToLoad(false);
            }}
            src={src}
          />
        ) : (
          <img
            alt={name}
            className={cn("aspect-square h-full w-full", imageClassName)}
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
