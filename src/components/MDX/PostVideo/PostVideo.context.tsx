import { createContext, useContext, ReactNode } from 'react';
import { SiteVideo } from '@lib/videos';

// A bare <PostVideo /> inside MDX has no way to know which page it is on, and
// the `components` map handed to MDXRemote is a module-level singleton shared by
// every page. The layout resolves the video and hands it down instead.
const PageVideoContext = createContext<SiteVideo | null>(null);

type Props = {
  video: SiteVideo | null;
  children: ReactNode;
};

export const PageVideoProvider = ({ video, children }: Props) => (
  <PageVideoContext.Provider value={video}>{children}</PageVideoContext.Provider>
);

export const usePageVideo = () => useContext(PageVideoContext);
