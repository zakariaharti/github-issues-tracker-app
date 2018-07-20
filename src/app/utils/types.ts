export interface Author{
  avatarUrl: string;
  login: string;
  url: string;
}

interface Owner extends Author{}

const enum IssueState{
  CLOSED = 'CLOSED',
  OPEN = 'OPEN'
}

interface Comment{
  author: Author;
  body: string;
  bodyText: string;
  createdAt: any;
  id: string;
  publishedAt: any;
  url: string;
  totalCount ?: number;
}

export interface Issue{
  author: Author;
  body ?: string;
  bodyText ?: string;
  bodyHTML ?: string;
  closed: boolean;
  createdAt: any;
  id: string;
  locked: boolean;
  number: number;
  publishedAt: any;
  title: string;
  url: string;
  state ?: IssueState;
  comments ?: {
    totalCount: number
  };
  totalCount ?: number;
  repository ?: {
    name ?: string,
    owner ?: {
      login ?: string
      avatarUrl ?: string;
    }
  }
}

export interface Repository{
  issues ?: {
    totalCount: number,
    nodes: Issue[]
  };
  issue ?: Issue;
  stargazers: {
    totalCount: number
  };
  watchers: {
    totalCount: number
  }
  createdAt: any;
  description: string;
  forkCount: number;
  hasIssuesEnabled: boolean;
  homepageUrl: string;
  id: string;
  name: string;
  nameWithOwner: string;
  owner: Owner;
  primaryLangauge:{
    id: string,
    name: string,
    color: string
  };
  url: string;
}
