import { Text } from "@gespenst/ui/text";
import { cva } from "class-variance-authority";
import { Fragment } from "react";

import type { ColorsProps } from "./types";

/**
 * @returns JSX.Element
 */
function GrayColor() {
  const grayVariants = cva("h-full w-full rounded border", {
    defaultVariants: {
      type: 100,
    },
    variants: {
      type: {
        100: "bg-gray-100",
        1000: "bg-gray-1000",
        200: "bg-gray-200",
        300: "bg-gray-300",
        400: "bg-gray-400",
        500: "bg-gray-500",
        600: "bg-gray-600",
        700: "bg-gray-700",
        800: "bg-gray-800",
        900: "bg-gray-900",
      },
    },
  });

  return (
    <Fragment>
      <div className="col-span-2 grid h-10 place-items-center">
        <Text className="w-full capitalize" paragraph>
          gray
        </Text>
      </div>
      <div className={grayVariants({ type: 100 })} />
      <div className={grayVariants({ type: 200 })} />
      <div className={grayVariants({ type: 300 })} />
      <div className={grayVariants({ type: 400 })} />
      <div className={grayVariants({ type: 500 })} />
      <div className={grayVariants({ type: 600 })} />
      <div className={grayVariants({ type: 700 })} />
      <div className={grayVariants({ type: 800 })} />
      <div className={grayVariants({ type: 900 })} />
      <div className={grayVariants({ type: 1000 })} />
    </Fragment>
  );
}

/**
 * @returns JSX.Element
 */
function BlueColor() {
  const blueVariants = cva("h-full w-full rounded border", {
    defaultVariants: {
      type: 100,
    },
    variants: {
      type: {
        100: "bg-blue-100",
        1000: "bg-blue-1000",
        200: "bg-blue-200",
        300: "bg-blue-300",
        400: "bg-blue-400",
        500: "bg-blue-500",
        600: "bg-blue-600",
        700: "bg-blue-700",
        800: "bg-blue-800",
        900: "bg-blue-900",
      },
    },
  });

  return (
    <Fragment>
      <div className="col-span-2 grid h-10 place-items-center">
        <Text className="w-full capitalize" paragraph>
          blue
        </Text>
      </div>
      <div className={blueVariants({ type: 100 })} />
      <div className={blueVariants({ type: 200 })} />
      <div className={blueVariants({ type: 300 })} />
      <div className={blueVariants({ type: 400 })} />
      <div className={blueVariants({ type: 500 })} />
      <div className={blueVariants({ type: 600 })} />
      <div className={blueVariants({ type: 700 })} />
      <div className={blueVariants({ type: 800 })} />
      <div className={blueVariants({ type: 900 })} />
      <div className={blueVariants({ type: 1000 })} />
    </Fragment>
  );
}

/**
 * @returns JSX.Element
 */
function RedColor() {
  const redVariants = cva("h-full w-full rounded border", {
    defaultVariants: {
      type: 100,
    },
    variants: {
      type: {
        100: "bg-red-100",
        1000: "bg-red-1000",
        200: "bg-red-200",
        300: "bg-red-300",
        400: "bg-red-400",
        500: "bg-red-500",
        600: "bg-red-600",
        700: "bg-red-700",
        800: "bg-red-800",
        900: "bg-red-900",
      },
    },
  });

  return (
    <Fragment>
      <div className="col-span-2 grid h-10 place-items-center">
        <Text className="w-full capitalize" paragraph>
          red
        </Text>
      </div>
      <div className={redVariants({ type: 100 })} />
      <div className={redVariants({ type: 200 })} />
      <div className={redVariants({ type: 300 })} />
      <div className={redVariants({ type: 400 })} />
      <div className={redVariants({ type: 500 })} />
      <div className={redVariants({ type: 600 })} />
      <div className={redVariants({ type: 700 })} />
      <div className={redVariants({ type: 800 })} />
      <div className={redVariants({ type: 900 })} />
      <div className={redVariants({ type: 1000 })} />
    </Fragment>
  );
}

/**
 * @returns JSX.Element
 */
function AmberColor() {
  const amberVariants = cva("h-full w-full rounded border", {
    defaultVariants: {
      type: 100,
    },
    variants: {
      type: {
        100: "bg-amber-100",
        1000: "bg-amber-1000",
        200: "bg-amber-200",
        300: "bg-amber-300",
        400: "bg-amber-400",
        500: "bg-amber-500",
        600: "bg-amber-600",
        700: "bg-amber-700",
        800: "bg-amber-800",
        900: "bg-amber-900",
      },
    },
  });

  return (
    <Fragment>
      <div className="col-span-2 grid h-10 place-items-center">
        <Text className="w-full capitalize" paragraph>
          amber
        </Text>
      </div>
      <div className={amberVariants({ type: 100 })} />
      <div className={amberVariants({ type: 200 })} />
      <div className={amberVariants({ type: 300 })} />
      <div className={amberVariants({ type: 400 })} />
      <div className={amberVariants({ type: 500 })} />
      <div className={amberVariants({ type: 600 })} />
      <div className={amberVariants({ type: 700 })} />
      <div className={amberVariants({ type: 800 })} />
      <div className={amberVariants({ type: 900 })} />
      <div className={amberVariants({ type: 1000 })} />
    </Fragment>
  );
}

/**
 * @returns JSX.Element
 */
function GreenColor() {
  const greenVariants = cva("h-full w-full rounded border", {
    defaultVariants: {
      type: 100,
    },
    variants: {
      type: {
        100: "bg-green-100",
        1000: "bg-green-1000",
        200: "bg-green-200",
        300: "bg-green-300",
        400: "bg-green-400",
        500: "bg-green-500",
        600: "bg-green-600",
        700: "bg-green-700",
        800: "bg-green-800",
        900: "bg-green-900",
      },
    },
  });

  return (
    <Fragment>
      <div className="col-span-2 grid h-10 place-items-center">
        <Text className="w-full capitalize" paragraph>
          green
        </Text>
      </div>
      <div className={greenVariants({ type: 100 })} />
      <div className={greenVariants({ type: 200 })} />
      <div className={greenVariants({ type: 300 })} />
      <div className={greenVariants({ type: 400 })} />
      <div className={greenVariants({ type: 500 })} />
      <div className={greenVariants({ type: 600 })} />
      <div className={greenVariants({ type: 700 })} />
      <div className={greenVariants({ type: 800 })} />
      <div className={greenVariants({ type: 900 })} />
      <div className={greenVariants({ type: 1000 })} />
    </Fragment>
  );
}

/**
 * @returns JSX.Element
 */
function TealColor() {
  const tealVariants = cva("h-full w-full rounded border", {
    defaultVariants: {
      type: 100,
    },
    variants: {
      type: {
        100: "bg-teal-100",
        1000: "bg-teal-1000",
        200: "bg-teal-200",
        300: "bg-teal-300",
        400: "bg-teal-400",
        500: "bg-teal-500",
        600: "bg-teal-600",
        700: "bg-teal-700",
        800: "bg-teal-800",
        900: "bg-teal-900",
      },
    },
  });

  return (
    <Fragment>
      <div className="col-span-2 grid h-10 place-items-center">
        <Text className="w-full capitalize" paragraph>
          teal
        </Text>
      </div>
      <div className={tealVariants({ type: 100 })} />
      <div className={tealVariants({ type: 200 })} />
      <div className={tealVariants({ type: 300 })} />
      <div className={tealVariants({ type: 400 })} />
      <div className={tealVariants({ type: 500 })} />
      <div className={tealVariants({ type: 600 })} />
      <div className={tealVariants({ type: 700 })} />
      <div className={tealVariants({ type: 800 })} />
      <div className={tealVariants({ type: 900 })} />
      <div className={tealVariants({ type: 1000 })} />
    </Fragment>
  );
}

/**
 * @returns JSX.Element
 */
function PurpleColor() {
  const purpleVariants = cva("h-full w-full rounded border", {
    defaultVariants: {
      type: 100,
    },
    variants: {
      type: {
        100: "bg-purple-100",
        1000: "bg-purple-1000",
        200: "bg-purple-200",
        300: "bg-purple-300",
        400: "bg-purple-400",
        500: "bg-purple-500",
        600: "bg-purple-600",
        700: "bg-purple-700",
        800: "bg-purple-800",
        900: "bg-purple-900",
      },
    },
  });

  return (
    <Fragment>
      <div className="col-span-2 grid h-10 place-items-center">
        <Text className="w-full capitalize" paragraph>
          purple
        </Text>
      </div>
      <div className={purpleVariants({ type: 100 })} />
      <div className={purpleVariants({ type: 200 })} />
      <div className={purpleVariants({ type: 300 })} />
      <div className={purpleVariants({ type: 400 })} />
      <div className={purpleVariants({ type: 500 })} />
      <div className={purpleVariants({ type: 600 })} />
      <div className={purpleVariants({ type: 700 })} />
      <div className={purpleVariants({ type: 800 })} />
      <div className={purpleVariants({ type: 900 })} />
      <div className={purpleVariants({ type: 1000 })} />
    </Fragment>
  );
}

/**
 * @returns JSX.Element
 */
function PinkColor() {
  const pinkVariants = cva("h-full w-full rounded border", {
    defaultVariants: {
      type: 100,
    },
    variants: {
      type: {
        100: "bg-pink-100",
        1000: "bg-pink-1000",
        200: "bg-pink-200",
        300: "bg-pink-300",
        400: "bg-pink-400",
        500: "bg-pink-500",
        600: "bg-pink-600",
        700: "bg-pink-700",
        800: "bg-pink-800",
        900: "bg-pink-900",
      },
    },
  });

  return (
    <Fragment>
      <div className="col-span-2 grid h-10 place-items-center">
        <Text className="w-full capitalize" paragraph>
          pink
        </Text>
      </div>
      <div className={pinkVariants({ type: 100 })} />
      <div className={pinkVariants({ type: 200 })} />
      <div className={pinkVariants({ type: 300 })} />
      <div className={pinkVariants({ type: 400 })} />
      <div className={pinkVariants({ type: 500 })} />
      <div className={pinkVariants({ type: 600 })} />
      <div className={pinkVariants({ type: 700 })} />
      <div className={pinkVariants({ type: 800 })} />
      <div className={pinkVariants({ type: 900 })} />
      <div className={pinkVariants({ type: 1000 })} />
    </Fragment>
  );
}

/**
 * @returns JSX.Element
 */
function BackgroundColor() {
  const backgroundVariants = cva("h-full w-full rounded border", {
    defaultVariants: {
      type: 100,
    },
    variants: {
      type: {
        100: "bg-background",
      },
    },
  });
  return (
    <Fragment>
      <div className="col-span-2 grid h-10 place-items-center">
        <Text className="w-full capitalize" paragraph>
          background
        </Text>
      </div>
      <div className={backgroundVariants({ type: 100 })} />
      <div />
      <div />
      <div />
      <div />
      <div />
      <div />
      <div />
      <div />
      <div />
    </Fragment>
  );
}

/**
 * @returns JSX.Element
 */
function AccentColor() {
  const accentVariants = cva("h-full w-full rounded border", {
    defaultVariants: {
      type: 100,
    },
    variants: {
      type: {
        100: "bg-accent",
        200: "bg-accent-foreground",
      },
    },
  });
  return (
    <Fragment>
      <div className="col-span-2 grid h-10 place-items-center">
        <Text className="w-full capitalize" paragraph>
          accent
        </Text>
      </div>
      <div className={accentVariants({ type: 100 })} />
      <div className={accentVariants({ type: 200 })} />
      <div />
      <div />
      <div />
      <div />
      <div />
      <div />
      <div />
      <div />
    </Fragment>
  );
}

/**
 * @returns JSX.Element
 */
function BorderColor() {
  const borderVariants = cva("h-full w-full rounded border", {
    defaultVariants: {
      type: 100,
    },
    variants: {
      type: {
        100: "bg-border",
      },
    },
  });
  return (
    <Fragment>
      <div className="col-span-2 grid h-10 place-items-center">
        <Text className="w-full capitalize" paragraph>
          border
        </Text>
      </div>
      <div className={borderVariants({ type: 100 })} />
      <div />
      <div />
      <div />
      <div />
      <div />
      <div />
      <div />
      <div />
      <div />
    </Fragment>
  );
}

/**
 * @returns JSX.Element
 */
function CardColor() {
  const cardVariants = cva("h-full w-full rounded border", {
    defaultVariants: {
      type: 100,
    },
    variants: {
      type: {
        100: "bg-card",
        200: "bg-card-foreground",
      },
    },
  });
  return (
    <Fragment>
      <div className="col-span-2 grid h-10 place-items-center">
        <Text className="w-full capitalize" paragraph>
          card
        </Text>
      </div>
      <div className={cardVariants({ type: 100 })} />
      <div className={cardVariants({ type: 200 })} />
      <div />
      <div />
      <div />
      <div />
      <div />
      <div />
      <div />
      <div />
    </Fragment>
  );
}

/**
 * @returns JSX.Element
 */
function ErrorColor() {
  const errorVariants = cva("h-full w-full rounded border", {
    defaultVariants: {
      type: 100,
    },
    variants: {
      type: {
        100: "bg-error",
        200: "bg-error-foreground",
        300: "bg-error-hover",
        400: "bg-error-active",
      },
    },
  });
  return (
    <Fragment>
      <div className="col-span-2 grid h-10 place-items-center">
        <Text className="w-full capitalize" paragraph>
          error
        </Text>
      </div>
      <div className={errorVariants({ type: 100 })} />
      <div className={errorVariants({ type: 200 })} />
      <div className={errorVariants({ type: 300 })} />
      <div className={errorVariants({ type: 400 })} />
      <div />
      <div />
      <div />
      <div />
      <div />
      <div />
    </Fragment>
  );
}

/**
 * @returns JSX.Element
 */
function ForegroundColor() {
  const foregroundVariants = cva("h-full w-full rounded border", {
    defaultVariants: {
      type: 100,
    },
    variants: {
      type: {
        100: "bg-foreground",
        200: "bg-foreground-foreground",
      },
    },
  });
  return (
    <Fragment>
      <div className="col-span-2 grid h-10 place-items-center">
        <Text className="w-full capitalize" paragraph>
          foreground
        </Text>
      </div>
      <div className={foregroundVariants({ type: 100 })} />
      <div />
      <div />
      <div />
      <div />
      <div />
      <div />
      <div />
      <div />
    </Fragment>
  );
}

/**
 * @returns JSX.Element
 */
function InfoColor() {
  const infoVariants = cva("h-full w-full rounded border", {
    defaultVariants: {
      type: 100,
    },
    variants: {
      type: {
        100: "bg-info",
        200: "bg-info-foreground",
        300: "bg-info-hover",
        400: "bg-info-active",
      },
    },
  });
  return (
    <Fragment>
      <div className="col-span-2 grid h-10 place-items-center">
        <Text className="w-full capitalize" paragraph>
          info
        </Text>
      </div>
      <div className={infoVariants({ type: 100 })} />
      <div className={infoVariants({ type: 200 })} />
      <div className={infoVariants({ type: 300 })} />
      <div className={infoVariants({ type: 400 })} />
      <div />
      <div />
      <div />
      <div />
      <div />
      <div />
    </Fragment>
  );
}

/**
 * @returns JSX.Element
 */
function InputColor() {
  const inputVariants = cva("h-full w-full rounded border", {
    defaultVariants: {
      type: 100,
    },
    variants: {
      type: {
        100: "bg-input",
      },
    },
  });
  return (
    <Fragment>
      <div className="col-span-2 grid h-10 place-items-center">
        <Text className="w-full capitalize" paragraph>
          input
        </Text>
      </div>
      <div className={inputVariants({ type: 100 })} />
      <div />
      <div />
      <div />
      <div />
      <div />
      <div />
      <div />
      <div />
      <div />
    </Fragment>
  );
}

/**
 * @returns JSX.Element
 */
function MutedColor() {
  const mutedVariants = cva("h-full w-full rounded border", {
    defaultVariants: {
      type: 100,
    },
    variants: {
      type: {
        100: "bg-muted",
        200: "bg-muted-foreground",
      },
    },
  });
  return (
    <Fragment>
      <div className="col-span-2 grid h-10 place-items-center">
        <Text className="w-full capitalize" paragraph>
          muted
        </Text>
      </div>
      <div className={mutedVariants({ type: 100 })} />
      <div className={mutedVariants({ type: 200 })} />
      <div />
      <div />
      <div />
      <div />
      <div />
      <div />
      <div />
      <div />
    </Fragment>
  );
}

/**
 * @returns JSX.Element
 */
function PopoverColor() {
  const popoverVariants = cva("h-full w-full rounded border", {
    defaultVariants: {
      type: 100,
    },
    variants: {
      type: {
        100: "bg-popover",
        200: "bg-popover-foreground",
      },
    },
  });
  return (
    <Fragment>
      <div className="col-span-2 grid h-10 place-items-center">
        <Text className="w-full capitalize" paragraph>
          popover
        </Text>
      </div>
      <div className={popoverVariants({ type: 100 })} />
      <div className={popoverVariants({ type: 200 })} />
      <div />
      <div />
      <div />
      <div />
      <div />
      <div />
      <div />
      <div />
    </Fragment>
  );
}

/**
 * @returns JSX.Element
 */
function PrimaryColor() {
  const primaryVariants = cva("h-full w-full rounded border", {
    defaultVariants: {
      type: 100,
    },
    variants: {
      type: {
        100: "bg-primary",
        200: "bg-primary-foreground",
        300: "bg-primary-hover",
      },
    },
  });
  return (
    <Fragment>
      <div className="col-span-2 grid h-10 place-items-center">
        <Text className="w-full capitalize" paragraph>
          primary
        </Text>
      </div>
      <div className={primaryVariants({ type: 100 })} />
      <div className={primaryVariants({ type: 200 })} />
      <div className={primaryVariants({ type: 300 })} />
      <div />
      <div />
      <div />
      <div />
      <div />
      <div />
      <div />
    </Fragment>
  );
}

/**
 * @returns JSX.Element
 */
function RingColor() {
  const ringVariants = cva("h-full w-full rounded border", {
    defaultVariants: {
      type: 100,
    },
    variants: {
      type: {
        100: "bg-ring",
      },
    },
  });
  return (
    <Fragment>
      <div className="col-span-2 grid h-10 place-items-center">
        <Text className="w-full capitalize" paragraph>
          ring
        </Text>
      </div>
      <div className={ringVariants({ type: 100 })} />
      <div />
      <div />
      <div />
      <div />
      <div />
      <div />
      <div />
      <div />
      <div />
    </Fragment>
  );
}

/**
 * @returns JSX.Element
 */
function SecondaryColor() {
  const secondaryVariants = cva("h-full w-full rounded border", {
    defaultVariants: {
      type: 100,
    },
    variants: {
      type: {
        100: "bg-secondary",
        200: "bg-secondary-foreground",
        300: "bg-secondary-hover",
      },
    },
  });
  return (
    <Fragment>
      <div className="col-span-2 grid h-10 place-items-center">
        <Text className="w-full capitalize" paragraph>
          secondary
        </Text>
      </div>
      <div className={secondaryVariants({ type: 100 })} />
      <div className={secondaryVariants({ type: 200 })} />
      <div className={secondaryVariants({ type: 300 })} />
      <div />
      <div />
      <div />
      <div />
      <div />
      <div />
      <div />
    </Fragment>
  );
}

/**
 * @returns JSX.Element
 */
function SuccessColor() {
  const successVariants = cva("h-full w-full rounded border", {
    defaultVariants: {
      type: 100,
    },
    variants: {
      type: {
        100: "bg-success",
        200: "bg-success-foreground",
        300: "bg-success-hover",
        400: "bg-success-active",
      },
    },
  });
  return (
    <Fragment>
      <div className="col-span-2 grid h-10 place-items-center">
        <Text className="w-full capitalize" paragraph>
          success
        </Text>
      </div>
      <div className={successVariants({ type: 100 })} />
      <div className={successVariants({ type: 200 })} />
      <div className={successVariants({ type: 300 })} />
      <div className={successVariants({ type: 400 })} />
      <div />
      <div />
      <div />
      <div />
      <div />
      <div />
    </Fragment>
  );
}

/**
 * @returns JSX.Element
 */
function WarningColor() {
  const warningVariants = cva("h-full w-full rounded border", {
    defaultVariants: {
      type: 100,
    },
    variants: {
      type: {
        100: "bg-warning",
        200: "bg-warning-foreground",
        300: "bg-warning-hover",
        400: "bg-warning-active",
      },
    },
  });
  return (
    <Fragment>
      <div className="col-span-2 grid h-10 place-items-center">
        <Text className="w-full capitalize" paragraph>
          warning
        </Text>
      </div>
      <div className={warningVariants({ type: 100 })} />
      <div className={warningVariants({ type: 200 })} />
      <div className={warningVariants({ type: 300 })} />
      <div className={warningVariants({ type: 400 })} />
      <div />
      <div />
      <div />
      <div />
      <div />
      <div />
    </Fragment>
  );
}

/**
 * Colors
 * @param ColorsProps - The props for the component
 * @param ColorsProps.color - The color of the component
 * @returns JSX.Element
 */
export function Colors({ color }: ColorsProps) {
  switch (color) {
    case "gray":
      return <GrayColor />;
    case "blue":
      return <BlueColor />;
    case "red":
      return <RedColor />;
    case "amber":
      return <AmberColor />;
    case "green":
      return <GreenColor />;
    case "teal":
      return <TealColor />;
    case "pink":
      return <PinkColor />;
    case "purple":
      return <PurpleColor />;
    case "accent":
      return <AccentColor />;
    case "background":
      return <BackgroundColor />;
    case "border":
      return <BorderColor />;
    case "card":
      return <CardColor />;
    case "error":
      return <ErrorColor />;
    case "foreground":
      return <ForegroundColor />;
    case "info":
      return <InfoColor />;
    case "input":
      return <InputColor />;
    case "muted":
      return <MutedColor />;
    case "popover":
      return <PopoverColor />;
    case "primary":
      return <PrimaryColor />;
    case "ring":
      return <RingColor />;
    case "secondary":
      return <SecondaryColor />;
    case "success":
      return <SuccessColor />;
    case "warning":
      return <WarningColor />;
    default:
      return <BackgroundColor />;
  }
}
