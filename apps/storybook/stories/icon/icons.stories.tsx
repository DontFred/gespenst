import { Icon } from "@gespenst/ui/icon";
import React from "react";

import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof Icon> = {
  argTypes: {},
  component: Icon,
  decorators: [
    (Story) => (
      <div
        style={{
          margin: "0 auto",
          width: "100px",
        }}
      >
        <Story />
      </div>
    ),
  ],
  title: "Icon/Icon",
};

export default meta;

type Story = StoryObj<typeof Icon>;

export const Accessibility: Story = {
  args: {
    name: "accessibility",
  },
};

export const AcronymApi: Story = {
  args: {
    name: "acronym-api",
  },
};

export const AcronymGif: Story = {
  args: {
    name: "acronym-gif",
  },
};

export const AcronymHttp: Story = {
  args: {
    name: "acronym-http",
  },
};

export const AcronymIsr: Story = {
  args: {
    name: "acronym-isr",
  },
};

export const AcronymJpg: Story = {
  args: {
    name: "acronym-jpg",
  },
};

export const AcronymJs: Story = {
  args: {
    name: "acronym-js",
  },
};

export const AcronymMarkdown: Story = {
  args: {
    name: "acronym-markdown",
  },
};

export const AcronymPage: Story = {
  args: {
    name: "acronym-page",
  },
};

export const AcronymSvg: Story = {
  args: {
    name: "acronym-svg",
  },
};

export const AcronymTs: Story = {
  args: {
    name: "acronym-ts",
  },
};

export const AlignmentCenter: Story = {
  args: {
    name: "alignment-center",
  },
};

export const AlignmentLeft: Story = {
  args: {
    name: "alignment-left",
  },
};

export const AlignmentRight: Story = {
  args: {
    name: "alignment-right",
  },
};

export const Alpha: Story = {
  args: {
    name: "alpha",
  },
};

export const Analytics: Story = {
  args: {
    name: "analytics",
  },
};

export const Anchor: Story = {
  args: {
    name: "anchor",
  },
};

export const Api: Story = {
  args: {
    name: "api",
  },
};

export const Archive: Story = {
  args: {
    name: "archive",
  },
};

export const ArrowCircleDown: Story = {
  args: {
    name: "arrow-circle-down",
  },
};

export const ArrowCircleLeft: Story = {
  args: {
    name: "arrow-circle-left",
  },
};

export const ArrowCircleRight: Story = {
  args: {
    name: "arrow-circle-right",
  },
};

export const ArrowCircleUp: Story = {
  args: {
    name: "arrow-circle-up",
  },
};

export const ArrowCrossed: Story = {
  args: {
    name: "arrow-crossed",
  },
};

export const ArrowDownLeft: Story = {
  args: {
    name: "arrow-down-left",
  },
};

export const ArrowDownRight: Story = {
  args: {
    name: "arrow-down-right",
  },
};

export const ArrowDown: Story = {
  args: {
    name: "arrow-down",
  },
};

export const ArrowGlobe: Story = {
  args: {
    name: "arrow-globe",
  },
};

export const ArrowLeftRight: Story = {
  args: {
    name: "arrow-left-right",
  },
};

export const ArrowLeft: Story = {
  args: {
    name: "arrow-left",
  },
};

export const ArrowRight: Story = {
  args: {
    name: "arrow-right",
  },
};

export const ArrowUpDiagonalScale: Story = {
  args: {
    name: "arrow-up-diagonal-scale",
  },
};

export const ArrowUpDown: Story = {
  args: {
    name: "arrow-up-down",
  },
};

export const ArrowUpLeft: Story = {
  args: {
    name: "arrow-up-left",
  },
};

export const ArrowUpRightSmall: Story = {
  args: {
    name: "arrow-up-right-small",
  },
};

export const ArrowUpRight: Story = {
  args: {
    name: "arrow-up-right",
  },
};

export const ArrowUp: Story = {
  args: {
    name: "arrow-up",
  },
};

export const Backspace: Story = {
  args: {
    name: "backspace",
  },
};

export const BarChart: Story = {
  args: {
    name: "bar-chart",
  },
};

export const BellOff: Story = {
  args: {
    name: "bell-off",
  },
};

export const Bell: Story = {
  args: {
    name: "bell",
  },
};

export const BlendMode: Story = {
  args: {
    name: "blend-mode",
  },
};

export const Blob: Story = {
  args: {
    name: "blob",
  },
};

export const BookClosed: Story = {
  args: {
    name: "book-closed",
  },
};

export const BookOpen: Story = {
  args: {
    name: "book-open",
  },
};

export const Bookmark: Story = {
  args: {
    name: "bookmark",
  },
};

export const Box: Story = {
  args: {
    name: "box",
  },
};

export const BranchMinus: Story = {
  args: {
    name: "branch-minus",
  },
};

export const BranchPlus: Story = {
  args: {
    name: "branch-plus",
  },
};

export const Briefcase: Story = {
  args: {
    name: "briefcase",
  },
};

export const BrowserArc: Story = {
  args: {
    name: "browser-arc",
  },
};

export const BrowserBrave: Story = {
  args: {
    name: "browser-brave",
  },
};

export const BrowserChrome: Story = {
  args: {
    name: "browser-chrome",
  },
};

export const BrowserEdge: Story = {
  args: {
    name: "browser-edge",
  },
};

export const BrowserFirefox: Story = {
  args: {
    name: "browser-firefox",
  },
};

export const BrowserOpera: Story = {
  args: {
    name: "browser-opera",
  },
};

export const BrowserSafari: Story = {
  args: {
    name: "browser-safari",
  },
};

export const Bug: Story = {
  args: {
    name: "bug",
  },
};

export const Buildings: Story = {
  args: {
    name: "buildings",
  },
};

export const Calculator: Story = {
  args: {
    name: "calculator",
  },
};

export const Calendar: Story = {
  args: {
    name: "calendar",
  },
};

export const Camera: Story = {
  args: {
    name: "camera",
  },
};

export const Cart: Story = {
  args: {
    name: "cart",
  },
};

export const ChartActivity: Story = {
  args: {
    name: "chart-activity",
  },
};

export const ChartBarMiddle: Story = {
  args: {
    name: "chart-bar-middle",
  },
};

export const ChartBarPeak: Story = {
  args: {
    name: "chart-bar-peak",
  },
};

export const ChartBarRandom: Story = {
  args: {
    name: "chart-bar-random",
  },
};

export const ChartPie: Story = {
  args: {
    name: "chart-pie",
  },
};

export const ChartTrendingDown: Story = {
  args: {
    name: "chart-trending-down",
  },
};

export const ChartTrendingUp: Story = {
  args: {
    name: "chart-trending-up",
  },
};

export const CheckCircleFill: Story = {
  args: {
    name: "check-circle-fill",
  },
};

export const CheckCircle: Story = {
  args: {
    name: "check-circle",
  },
};

export const CheckSquare: Story = {
  args: {
    name: "check-square",
  },
};

export const Check: Story = {
  args: {
    name: "check",
  },
};

export const ChevronCircleDownFill: Story = {
  args: {
    name: "chevron-circle-down-fill",
  },
};

export const ChevronCircleDown: Story = {
  args: {
    name: "chevron-circle-down",
  },
};

export const ChevronCircleLeftFill: Story = {
  args: {
    name: "chevron-circle-left-fill",
  },
};

export const ChevronCircleLeft: Story = {
  args: {
    name: "chevron-circle-left",
  },
};

export const ChevronCircleRightFill: Story = {
  args: {
    name: "chevron-circle-right-fill",
  },
};

export const ChevronCircleRight: Story = {
  args: {
    name: "chevron-circle-right",
  },
};

export const ChevronCircleUpFill: Story = {
  args: {
    name: "chevron-circle-up-fill",
  },
};

export const ChevronCircleUp: Story = {
  args: {
    name: "chevron-circle-up",
  },
};

export const ChevronDoubleDown: Story = {
  args: {
    name: "chevron-double-down",
  },
};

export const ChevronDoubleLeft: Story = {
  args: {
    name: "chevron-double-left",
  },
};

export const ChevronDoubleRight: Story = {
  args: {
    name: "chevron-double-right",
  },
};

export const ChevronDoubleUp: Story = {
  args: {
    name: "chevron-double-up",
  },
};

export const ChevronDownSmall: Story = {
  args: {
    name: "chevron-down-small",
  },
};

export const ChevronDown: Story = {
  args: {
    name: "chevron-down",
  },
};

export const ChevronLeftSmall: Story = {
  args: {
    name: "chevron-left-small",
  },
};

export const ChevronLeft: Story = {
  args: {
    name: "chevron-left",
  },
};

export const ChevronRightSmall: Story = {
  args: {
    name: "chevron-right-small",
  },
};

export const ChevronRight: Story = {
  args: {
    name: "chevron-right",
  },
};

export const ChevronUpSmall: Story = {
  args: {
    name: "chevron-up-small",
  },
};

export const ChevronUp: Story = {
  args: {
    name: "chevron-up",
  },
};

export const Clipboard: Story = {
  args: {
    name: "clipboard",
  },
};

export const ClockDashed: Story = {
  args: {
    name: "clock-dashed",
  },
};

export const ClockRewind: Story = {
  args: {
    name: "clock-rewind",
  },
};

export const ClockSmall: Story = {
  args: {
    name: "clock-small",
  },
};

export const Clock: Story = {
  args: {
    name: "clock",
  },
};

export const ClosedCaptions: Story = {
  args: {
    name: "closed-captions",
  },
};

export const CloudDownload: Story = {
  args: {
    name: "cloud-download",
  },
};

export const CloudUpload: Story = {
  args: {
    name: "cloud-upload",
  },
};

export const Cloud: Story = {
  args: {
    name: "cloud",
  },
};

export const CodeBlock: Story = {
  args: {
    name: "code-block",
  },
};

export const CodeBracket: Story = {
  args: {
    name: "code-bracket",
  },
};

export const CodeWrap: Story = {
  args: {
    name: "code-wrap",
  },
};

export const Code: Story = {
  args: {
    name: "code",
  },
};

export const Codepen: Story = {
  args: {
    name: "codepen",
  },
};

export const Command: Story = {
  args: {
    name: "command",
  },
};

export const Compass: Story = {
  args: {
    name: "compass",
  },
};

export const Connection: Story = {
  args: {
    name: "connection",
  },
};

export const Copy: Story = {
  args: {
    name: "copy",
  },
};

export const CornerDownLeft: Story = {
  args: {
    name: "corner-down-left",
  },
};

export const CornerDownRight: Story = {
  args: {
    name: "corner-down-right",
  },
};

export const CornerLeftDown: Story = {
  args: {
    name: "corner-left-down",
  },
};

export const CornerLeftUp: Story = {
  args: {
    name: "corner-left-up",
  },
};

export const CornerRightDown: Story = {
  args: {
    name: "corner-right-down",
  },
};

export const CornerRightUp: Story = {
  args: {
    name: "corner-right-up",
  },
};

export const CornerUpLeft: Story = {
  args: {
    name: "corner-up-left",
  },
};

export const CornerUpRight: Story = {
  args: {
    name: "corner-up-right",
  },
};

export const Cpu: Story = {
  args: {
    name: "cpu",
  },
};

export const CreditCard: Story = {
  args: {
    name: "credit-card",
  },
};

export const Crop: Story = {
  args: {
    name: "crop",
  },
};

export const CrossCircleFill: Story = {
  args: {
    name: "cross-circle-fill",
  },
};

export const CrossCircle: Story = {
  args: {
    name: "cross-circle",
  },
};

export const CrossSmall: Story = {
  args: {
    name: "cross-small",
  },
};

export const Cross: Story = {
  args: {
    name: "cross",
  },
};

export const Crosshair: Story = {
  args: {
    name: "crosshair",
  },
};

export const CursorClick: Story = {
  args: {
    name: "cursor-click",
  },
};

export const Cursor: Story = {
  args: {
    name: "cursor",
  },
};

export const DataPointLow: Story = {
  args: {
    name: "data-point-low",
  },
};

export const DataPointMedium: Story = {
  args: {
    name: "data-point-medium",
  },
};

export const DataPoint: Story = {
  args: {
    name: "data-point",
  },
};

export const Database: Story = {
  args: {
    name: "database",
  },
};

export const Delta: Story = {
  args: {
    name: "delta",
  },
};

export const DesktopDevice: Story = {
  args: {
    name: "desktop-device",
  },
};

export const DeviceAlternate: Story = {
  args: {
    name: "device-alternate",
  },
};

export const Display: Story = {
  args: {
    name: "display",
  },
};

export const DollarFill: Story = {
  args: {
    name: "dollar-fill",
  },
};

export const Dollar: Story = {
  args: {
    name: "dollar",
  },
};

export const Download: Story = {
  args: {
    name: "download",
  },
};

export const Droplet: Story = {
  args: {
    name: "droplet",
  },
};

export const EdgeConfig: Story = {
  args: {
    name: "edge-config",
  },
};

export const Edge: Story = {
  args: {
    name: "edge",
  },
};

export const Email: Story = {
  args: {
    name: "email",
  },
};

export const Envelope: Story = {
  args: {
    name: "envelope",
  },
};

export const ExternalSmall: Story = {
  args: {
    name: "external-small",
  },
};

export const External: Story = {
  args: {
    name: "external",
  },
};

export const EyeDashed: Story = {
  args: {
    name: "eye-dashed",
  },
};

export const EyeOff: Story = {
  args: {
    name: "eye-off",
  },
};

export const Eye: Story = {
  args: {
    name: "eye",
  },
};

export const FaceHappy: Story = {
  args: {
    name: "face-happy",
  },
};

export const FacePlus: Story = {
  args: {
    name: "face-plus",
  },
};

export const FaceSad: Story = {
  args: {
    name: "face-sad",
  },
};

export const FaceSmile: Story = {
  args: {
    name: "face-smile",
  },
};

export const FaceUnhappy: Story = {
  args: {
    name: "face-unhappy",
  },
};

export const FileText: Story = {
  args: {
    name: "file-text",
  },
};

export const FileZip: Story = {
  args: {
    name: "file-zip",
  },
};

export const File: Story = {
  args: {
    name: "file",
  },
};

export const Filter: Story = {
  args: {
    name: "filter",
  },
};

export const FlagPriority: Story = {
  args: {
    name: "flag-priority",
  },
};

export const Flag: Story = {
  args: {
    name: "flag",
  },
};

export const FloppyDisk: Story = {
  args: {
    name: "floppy-disk",
  },
};

export const FolderClosed: Story = {
  args: {
    name: "folder-closed",
  },
};

export const FolderMinus: Story = {
  args: {
    name: "folder-minus",
  },
};

export const FolderOpen: Story = {
  args: {
    name: "folder-open",
  },
};

export const FolderPlus: Story = {
  args: {
    name: "folder-plus",
  },
};

export const Footer: Story = {
  args: {
    name: "footer",
  },
};

export const Forward10Seconds: Story = {
  args: {
    name: "forward10-seconds",
  },
};

export const Fulcrum: Story = {
  args: {
    name: "fulcrum",
  },
};

export const FullscreenClose: Story = {
  args: {
    name: "fullscreen-close",
  },
};

export const Fullscreen: Story = {
  args: {
    name: "fullscreen",
  },
};

export const FunctionEdge: Story = {
  args: {
    name: "function-edge",
  },
};

export const FunctionMiddleware: Story = {
  args: {
    name: "function-middleware",
  },
};

export const FunctionRectangleFill: Story = {
  args: {
    name: "function-rectangle-fill",
  },
};

export const FunctionRectangle: Story = {
  args: {
    name: "function-rectangle",
  },
};

export const Function: Story = {
  args: {
    name: "function",
  },
};

export const Gauge: Story = {
  args: {
    name: "gauge",
  },
};

export const GitBranch: Story = {
  args: {
    name: "git-branch",
  },
};

export const GitCommit: Story = {
  args: {
    name: "git-commit",
  },
};

export const GitMerge: Story = {
  args: {
    name: "git-merge",
  },
};

export const GitPullRequest: Story = {
  args: {
    name: "git-pull-request",
  },
};

export const GlobeBox: Story = {
  args: {
    name: "globe-box",
  },
};

export const Globe: Story = {
  args: {
    name: "globe",
  },
};

export const Gps: Story = {
  args: {
    name: "gps",
  },
};

export const GridMasonry: Story = {
  args: {
    name: "grid-masonry",
  },
};

export const GridSquare: Story = {
  args: {
    name: "grid-square",
  },
};

export const Hash: Story = {
  args: {
    name: "hash",
  },
};

export const Header: Story = {
  args: {
    name: "header",
  },
};

export const Headset: Story = {
  args: {
    name: "headset",
  },
};

export const HeartFill: Story = {
  args: {
    name: "heart-fill",
  },
};

export const Heart: Story = {
  args: {
    name: "heart",
  },
};

export const Home: Story = {
  args: {
    name: "home",
  },
};

export const Hook: Story = {
  args: {
    name: "hook",
  },
};

export const Image: Story = {
  args: {
    name: "image",
  },
};

export const InboxUnread: Story = {
  args: {
    name: "inbox-unread",
  },
};

export const Inbox: Story = {
  args: {
    name: "inbox",
  },
};

export const InformationFillSmall: Story = {
  args: {
    name: "information-fill-small",
  },
};

export const InformationFill: Story = {
  args: {
    name: "information-fill",
  },
};

export const Information: Story = {
  args: {
    name: "information",
  },
};

export const Inspect: Story = {
  args: {
    name: "inspect",
  },
};

export const Invoice: Story = {
  args: {
    name: "invoice",
  },
};

export const Isr: Story = {
  args: {
    name: "isr",
  },
};

export const KeyOld: Story = {
  args: {
    name: "key-old",
  },
};

export const Key: Story = {
  args: {
    name: "key",
  },
};

export const Kv: Story = {
  args: {
    name: "kv",
  },
};

export const LambdaRectangleFill: Story = {
  args: {
    name: "lambda-rectangle-fill",
  },
};

export const LambdaRectangle: Story = {
  args: {
    name: "lambda-rectangle",
  },
};

export const Lambda: Story = {
  args: {
    name: "lambda",
  },
};

export const Layers: Story = {
  args: {
    name: "layers",
  },
};

export const LayoutDashed: Story = {
  args: {
    name: "layout-dashed",
  },
};

export const Layout: Story = {
  args: {
    name: "layout",
  },
};

export const Lens: Story = {
  args: {
    name: "lens",
  },
};

export const Lifebuoy: Story = {
  args: {
    name: "lifebuoy",
  },
};

export const Lightning: Story = {
  args: {
    name: "lightning",
  },
};

export const LineChart: Story = {
  args: {
    name: "line-chart",
  },
};

export const Link: Story = {
  args: {
    name: "link",
  },
};

export const Linked: Story = {
  args: {
    name: "linked",
  },
};

export const Linkedin: Story = {
  args: {
    name: "linkedin",
  },
};

export const ListOrdered: Story = {
  args: {
    name: "list-ordered",
  },
};

export const ListUnordered: Story = {
  args: {
    name: "list-unordered",
  },
};

export const LoaderCircle: Story = {
  args: {
    name: "loader-circle",
  },
};

export const Location: Story = {
  args: {
    name: "location",
  },
};

export const LockClosedSmall: Story = {
  args: {
    name: "lock-closed-small",
  },
};

export const LockClosed: Story = {
  args: {
    name: "lock-closed",
  },
};

export const LockOpen: Story = {
  args: {
    name: "lock-open",
  },
};

export const LogoAngularColor: Story = {
  args: {
    name: "logo-angular-color",
  },
};

export const LogoAzureDevops: Story = {
  args: {
    name: "logo-azure-devops",
  },
};

export const LogoBitbucketColor: Story = {
  args: {
    name: "logo-bitbucket-color",
  },
};

export const LogoCheckly: Story = {
  args: {
    name: "logo-checkly",
  },
};

export const LogoDiscord: Story = {
  args: {
    name: "logo-discord",
  },
};

export const LogoEmber: Story = {
  args: {
    name: "logo-ember",
  },
};

export const LogoFacebook: Story = {
  args: {
    name: "logo-facebook",
  },
};

export const LogoFigma: Story = {
  args: {
    name: "logo-figma",
  },
};

export const LogoGatsby: Story = {
  args: {
    name: "logo-gatsby",
  },
};

export const LogoGeist: Story = {
  args: {
    name: "logo-geist",
  },
};

export const LogoGespenst: Story = {
  args: {
    name: "logo-gespenst",
  },
};

export const LogoGithub: Story = {
  args: {
    name: "logo-github",
  },
};

export const LogoGitlab: Story = {
  args: {
    name: "logo-gitlab",
  },
};

export const LogoGoogle: Story = {
  args: {
    name: "logo-google",
  },
};

export const LogoHugo: Story = {
  args: {
    name: "logo-hugo",
  },
};

export const LogoHyper: Story = {
  args: {
    name: "logo-hyper",
  },
};

export const LogoLinear: Story = {
  args: {
    name: "logo-linear",
  },
};

export const LogoMeta: Story = {
  args: {
    name: "logo-meta",
  },
};

export const LogoNext: Story = {
  args: {
    name: "logo-next",
  },
};

export const LogoNode: Story = {
  args: {
    name: "logo-node",
  },
};

export const LogoNuxt: Story = {
  args: {
    name: "logo-nuxt",
  },
};

export const LogoOpenAi: Story = {
  args: {
    name: "logo-open-ai",
  },
};

export const LogoPython: Story = {
  args: {
    name: "logo-python",
  },
};

export const LogoReact: Story = {
  args: {
    name: "logo-react",
  },
};

export const LogoReddit: Story = {
  args: {
    name: "logo-reddit",
  },
};

export const LogoRemix: Story = {
  args: {
    name: "logo-remix",
  },
};

export const LogoRust: Story = {
  args: {
    name: "logo-rust",
  },
};

export const LogoSlackColor: Story = {
  args: {
    name: "logo-slack-color",
  },
};

export const LogoSlack: Story = {
  args: {
    name: "logo-slack",
  },
};

export const LogoSolid: Story = {
  args: {
    name: "logo-solid",
  },
};

export const LogoSplitbee: Story = {
  args: {
    name: "logo-splitbee",
  },
};

export const LogoSvelte: Story = {
  args: {
    name: "logo-svelte",
  },
};

export const LogoTurbopack: Story = {
  args: {
    name: "logo-turbopack",
  },
};

export const LogoTurborepo: Story = {
  args: {
    name: "logo-turborepo",
  },
};

export const LogoTwitterX: Story = {
  args: {
    name: "logo-twitter-x",
  },
};

export const LogoV0: Story = {
  args: {
    name: "logo-v0",
  },
};

export const LogoVercelApi: Story = {
  args: {
    name: "logo-vercel-api",
  },
};

export const LogoVercelCircle: Story = {
  args: {
    name: "logo-vercel-circle",
  },
};

export const LogoVercelFill: Story = {
  args: {
    name: "logo-vercel-fill",
  },
};

export const LogoVercel: Story = {
  args: {
    name: "logo-vercel",
  },
};

export const LogoVite: Story = {
  args: {
    name: "logo-vite",
  },
};

export const LogoVue: Story = {
  args: {
    name: "logo-vue",
  },
};

export const LogoYCombinator: Story = {
  args: {
    name: "logo-y-combinator",
  },
};

export const Logout: Story = {
  args: {
    name: "logout",
  },
};

export const Logs: Story = {
  args: {
    name: "logs",
  },
};

export const MagnifyingGlassMinus: Story = {
  args: {
    name: "magnifying-glass-minus",
  },
};

export const MagnifyingGlassPlus: Story = {
  args: {
    name: "magnifying-glass-plus",
  },
};

export const MagnifyingGlassSmall: Story = {
  args: {
    name: "magnifying-glass-small",
  },
};

export const MagnifyingGlass: Story = {
  args: {
    name: "magnifying-glass",
  },
};

export const MenuAltUnread: Story = {
  args: {
    name: "menu-alt-unread",
  },
};

export const MenuAlt: Story = {
  args: {
    name: "menu-alt",
  },
};

export const Menu: Story = {
  args: {
    name: "menu",
  },
};

export const Message: Story = {
  args: {
    name: "message",
  },
};

export const MicrophoneOff: Story = {
  args: {
    name: "microphone-off",
  },
};

export const Microphone: Story = {
  args: {
    name: "microphone",
  },
};

export const Middleware: Story = {
  args: {
    name: "middleware",
  },
};

export const MinusCircle: Story = {
  args: {
    name: "minus-circle",
  },
};

export const MinusSquareSmall: Story = {
  args: {
    name: "minus-square-small",
  },
};

export const Minus: Story = {
  args: {
    name: "minus",
  },
};

export const Monitoring: Story = {
  args: {
    name: "monitoring",
  },
};

export const Monorepo: Story = {
  args: {
    name: "monorepo",
  },
};

export const MoonAlternate: Story = {
  args: {
    name: "moon-alternate",
  },
};

export const Moon: Story = {
  args: {
    name: "moon",
  },
};

export const MoreHorizontal: Story = {
  args: {
    name: "more-horizontal",
  },
};

export const MoreVertical: Story = {
  args: {
    name: "more-vertical",
  },
};

export const Music: Story = {
  args: {
    name: "music",
  },
};

export const MusicalNotes: Story = {
  args: {
    name: "musical-notes",
  },
};

export const NetworkDevice: Story = {
  args: {
    name: "network-device",
  },
};

export const Notebook: Story = {
  args: {
    name: "notebook",
  },
};

export const Notes: Story = {
  args: {
    name: "notes",
  },
};

export const Notification: Story = {
  args: {
    name: "notification",
  },
};

export const Option: Story = {
  args: {
    name: "option",
  },
};

export const PaperAirplane: Story = {
  args: {
    name: "paper-airplane",
  },
};

export const Paperclip: Story = {
  args: {
    name: "paperclip",
  },
};

export const Pause: Story = {
  args: {
    name: "pause",
  },
};

export const Pen: Story = {
  args: {
    name: "pen",
  },
};

export const PencilEdit: Story = {
  args: {
    name: "pencil-edit",
  },
};

export const Pencil: Story = {
  args: {
    name: "pencil",
  },
};

export const Percentage: Story = {
  args: {
    name: "percentage",
  },
};

export const PhoneDevice: Story = {
  args: {
    name: "phone-device",
  },
};

export const Phone: Story = {
  args: {
    name: "phone",
  },
};

export const PictureInPicture: Story = {
  args: {
    name: "picture-in-picture",
  },
};

export const Pin: Story = {
  args: {
    name: "pin",
  },
};

export const PlayFill: Story = {
  args: {
    name: "play-fill",
  },
};

export const Play: Story = {
  args: {
    name: "play",
  },
};

export const PlusCircle: Story = {
  args: {
    name: "plus-circle",
  },
};

export const PlusSquareSmall: Story = {
  args: {
    name: "plus-square-small",
  },
};

export const Plus: Story = {
  args: {
    name: "plus",
  },
};

export const Postgres: Story = {
  args: {
    name: "postgres",
  },
};

export const Power: Story = {
  args: {
    name: "power",
  },
};

export const PreviewDocument: Story = {
  args: {
    name: "preview-document",
  },
};

export const PreviewEye: Story = {
  args: {
    name: "preview-eye",
  },
};

export const PrismColor: Story = {
  args: {
    name: "prism-color",
  },
};

export const Prism: Story = {
  args: {
    name: "prism",
  },
};

export const Puzzle: Story = {
  args: {
    name: "puzzle",
  },
};

export const QuestionFill: Story = {
  args: {
    name: "question-fill",
  },
};

export const Question: Story = {
  args: {
    name: "question",
  },
};

export const RefreshClockwise: Story = {
  args: {
    name: "refresh-clockwise",
  },
};

export const RefreshCounterClockwise: Story = {
  args: {
    name: "refresh-counter-clockwise",
  },
};

export const Repositories: Story = {
  args: {
    name: "repositories",
  },
};

export const Rewind10Seconds: Story = {
  args: {
    name: "rewind10-seconds",
  },
};

export const RotateClockwise: Story = {
  args: {
    name: "rotate-clockwise",
  },
};

export const RotateCounterClockwise: Story = {
  args: {
    name: "rotate-counter-clockwise",
  },
};

export const Route: Story = {
  args: {
    name: "route",
  },
};

export const Router: Story = {
  args: {
    name: "router",
  },
};

export const Rss: Story = {
  args: {
    name: "rss",
  },
};

export const SecureConnection: Story = {
  args: {
    name: "secure-connection",
  },
};

export const Serverless: Story = {
  args: {
    name: "serverless",
  },
};

export const Servers: Story = {
  args: {
    name: "servers",
  },
};

export const SettingsGearFill: Story = {
  args: {
    name: "settings-gear-fill",
  },
};

export const SettingsGear: Story = {
  args: {
    name: "settings-gear",
  },
};

export const SettingsSlider: Story = {
  args: {
    name: "settings-slider",
  },
};

export const SettingsSliders: Story = {
  args: {
    name: "settings-sliders",
  },
};

export const Share: Story = {
  args: {
    name: "share",
  },
};

export const Shareplay: Story = {
  args: {
    name: "shareplay",
  },
};

export const ShieldCheck: Story = {
  args: {
    name: "shield-check",
  },
};

export const ShieldGlobe: Story = {
  args: {
    name: "shield-globe",
  },
};

export const ShieldOff: Story = {
  args: {
    name: "shield-off",
  },
};

export const ShieldSmall: Story = {
  args: {
    name: "shield-small",
  },
};

export const Shield: Story = {
  args: {
    name: "shield",
  },
};

export const Shift: Story = {
  args: {
    name: "shift",
  },
};

export const SidebarLeft: Story = {
  args: {
    name: "sidebar-left",
  },
};

export const SidebarRight: Story = {
  args: {
    name: "sidebar-right",
  },
};

export const SignIn: Story = {
  args: {
    name: "sign-in",
  },
};

export const SkipBackFill: Story = {
  args: {
    name: "skip-back-fill",
  },
};

export const SkipBack: Story = {
  args: {
    name: "skip-back",
  },
};

export const SkipForwardFill: Story = {
  args: {
    name: "skip-forward-fill",
  },
};

export const SkipForward: Story = {
  args: {
    name: "skip-forward",
  },
};

export const SlashBack: Story = {
  args: {
    name: "slash-back",
  },
};

export const SlashForward: Story = {
  args: {
    name: "slash-forward",
  },
};

export const Slash: Story = {
  args: {
    name: "slash",
  },
};

export const SortAscending: Story = {
  args: {
    name: "sort-ascending",
  },
};

export const SortDescending: Story = {
  args: {
    name: "sort-descending",
  },
};

export const Spaces: Story = {
  args: {
    name: "spaces",
  },
};

export const Sparkles: Story = {
  args: {
    name: "sparkles",
  },
};

export const SpeakerFill: Story = {
  args: {
    name: "speaker-fill",
  },
};

export const SpeakerOffFill: Story = {
  args: {
    name: "speaker-off-fill",
  },
};

export const SpeakerOff: Story = {
  args: {
    name: "speaker-off",
  },
};

export const SpeakerVolumeLoudFill: Story = {
  args: {
    name: "speaker-volume-loud-fill",
  },
};

export const SpeakerVolumeLoud: Story = {
  args: {
    name: "speaker-volume-loud",
  },
};

export const SpeakerVolumeQuietFill: Story = {
  args: {
    name: "speaker-volume-quiet-fill",
  },
};

export const SpeakerVolumeQuiet: Story = {
  args: {
    name: "speaker-volume-quiet",
  },
};

export const Speaker: Story = {
  args: {
    name: "speaker",
  },
};

export const StarFill: Story = {
  args: {
    name: "star-fill",
  },
};

export const Star: Story = {
  args: {
    name: "star",
  },
};

export const StatusSmall: Story = {
  args: {
    name: "status-small",
  },
};

export const Status: Story = {
  args: {
    name: "status",
  },
};

export const StopCircle: Story = {
  args: {
    name: "stop-circle",
  },
};

export const StopFill: Story = {
  args: {
    name: "stop-fill",
  },
};

export const Stop: Story = {
  args: {
    name: "stop",
  },
};

export const StopwatchFast: Story = {
  args: {
    name: "stopwatch-fast",
  },
};

export const Stopwatch: Story = {
  args: {
    name: "stopwatch",
  },
};

export const Store: Story = {
  args: {
    name: "store",
  },
};

export const SunAlternate: Story = {
  args: {
    name: "sun-alternate",
  },
};

export const Sun: Story = {
  args: {
    name: "sun",
  },
};

export const Tab: Story = {
  args: {
    name: "tab",
  },
};

export const TabletDevice: Story = {
  args: {
    name: "tablet-device",
  },
};

export const Tabs: Story = {
  args: {
    name: "tabs",
  },
};

export const Tag: Story = {
  args: {
    name: "tag",
  },
};

export const Target: Story = {
  args: {
    name: "target",
  },
};

export const TerminalWindow: Story = {
  args: {
    name: "terminal-window",
  },
};

export const Terminal: Story = {
  args: {
    name: "terminal",
  },
};

export const TextBold: Story = {
  args: {
    name: "text-bold",
  },
};

export const TextFormat: Story = {
  args: {
    name: "text-format",
  },
};

export const TextHeading: Story = {
  args: {
    name: "text-heading",
  },
};

export const TextItalic: Story = {
  args: {
    name: "text-italic",
  },
};

export const TextStrikethrough: Story = {
  args: {
    name: "text-strikethrough",
  },
};

export const TextTitle: Story = {
  args: {
    name: "text-title",
  },
};

export const TextUppercase: Story = {
  args: {
    name: "text-uppercase",
  },
};

export const ThumbDown: Story = {
  args: {
    name: "thumb-down",
  },
};

export const ThumbUp: Story = {
  args: {
    name: "thumb-up",
  },
};

export const ToggleOffAltUnread: Story = {
  args: {
    name: "toggle-off-alt-unread",
  },
};

export const ToggleOffAlt: Story = {
  args: {
    name: "toggle-off-alt",
  },
};

export const ToggleOff: Story = {
  args: {
    name: "toggle-off",
  },
};

export const ToggleOnAltUnread: Story = {
  args: {
    name: "toggle-on-alt-unread",
  },
};

export const ToggleOnAlt: Story = {
  args: {
    name: "toggle-on-alt",
  },
};

export const ToggleOn: Story = {
  args: {
    name: "toggle-on",
  },
};

export const Trash: Story = {
  args: {
    name: "trash",
  },
};

export const UserCheck: Story = {
  args: {
    name: "user-check",
  },
};

export const UserCross: Story = {
  args: {
    name: "user-cross",
  },
};

export const UserMinus: Story = {
  args: {
    name: "user-minus",
  },
};

export const UserPlus: Story = {
  args: {
    name: "user-plus",
  },
};

export const UserScreen: Story = {
  args: {
    name: "user-screen",
  },
};

export const UserSettings: Story = {
  args: {
    name: "user-settings",
  },
};

export const User: Story = {
  args: {
    name: "user",
  },
};

export const Users: Story = {
  args: {
    name: "users",
  },
};

export const Variable: Story = {
  args: {
    name: "variable",
  },
};

export const Video: Story = {
  args: {
    name: "video",
  },
};

export const WarningFill: Story = {
  args: {
    name: "warning-fill",
  },
};

export const Warning: Story = {
  args: {
    name: "warning",
  },
};

export const WebcamOff: Story = {
  args: {
    name: "webcam-off",
  },
};

export const Webcam: Story = {
  args: {
    name: "webcam",
  },
};

export const Webhook: Story = {
  args: {
    name: "webhook",
  },
};

export const WindowGlobe: Story = {
  args: {
    name: "window-globe",
  },
};

export const WindowVariable: Story = {
  args: {
    name: "window-variable",
  },
};

export const Window: Story = {
  args: {
    name: "window",
  },
};

export const Wrench: Story = {
  args: {
    name: "wrench",
  },
};

export const ZeroConfig: Story = {
  args: {
    name: "zero-config",
  },
};
