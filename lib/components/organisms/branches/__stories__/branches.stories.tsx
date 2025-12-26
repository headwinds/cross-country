import type { Meta, StoryObj } from "@storybook/react-vite";
import Branches from "../branches";
import { emails } from "../../../molecules/gold-leaf/gold-leaf-view/__stories__/emails";
import type { GenericFetch, Service } from "../branches";
import type { PortholeBranchModel, EmailModel } from "@/models";

const meta: Meta<typeof Branches> = {
  component: Branches,
  title: "components/organisms/branches",
} satisfies Meta<typeof Branches>;

export default meta;
type Story = StoryObj<typeof Branches>;

const remoteUrl =
  "https://scout-222670816692.northamerica-northeast1.run.app/api/porthole/trees";

const localUrl = "http://localhost:5000/api/porthole/trees";

export const BranchesStoryWithRemoteUrl: Story = {
  render: () => {
    const onLoadedCallback = (error) => {
      console.log;
    };
    const is_production = true;
    const feedUrl = is_production ? remoteUrl : localUrl;

    const sampleUrls = [
      "https://coolhunting.com/feed/",
      "http://kotaku.com/rss/vip",
      "http://feeds.feedburner.com/colossal",
      "http://feeds.feedburner.com/design-milk",
    ];

    return (
      <div>
        <p>Works but is slow as it fetches all the trees</p>
        <Branches
          onLoadedCallback={onLoadedCallback}
          feedUrl={feedUrl}
          urls={sampleUrls}
        />
      </div>
    );
  },
};

export const BranchesStoryWithLocalUrl: Story = {
  render: () => {
    const onLoadedCallback = (error) => {
      console.log;
    };
    return <Branches isTesting onLoadedCallback={onLoadedCallback} />;
  },
};

class EmailService implements Service<GenericFetch> {
  emailCollectionData: EmailModel[];

  constructor(emailCollectionData: EmailModel[]) {
    this.emailCollectionData = emailCollectionData;
  }

  fetchData(): Promise<GenericFetch> {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(this.emailCollectionData as unknown as GenericFetch);
      }, 1000); // Simulate network delay
    });
  }
}

export const BranchesStoryWithEmailCollection: Story = {
  render: () => {
    const onLoadedCallback = (error) => {
      console.log;
    };

    const emailCollectionData = emails;
    const service = new EmailService(
      emailCollectionData as unknown as EmailModel[]
    );

    return (
      <Branches
        isTesting
        onLoadedCallback={onLoadedCallback}
        service={service as unknown as Service<GenericFetch>}
        variant="email"
      />
    );
  },
};
