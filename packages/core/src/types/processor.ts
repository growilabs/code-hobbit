import type { IFileChange } from './file';
import type { IPullRequestInfo } from './github';
import type { IReviewComment } from './review';

type IPullRequestProcessedResult = {
  updatedPrInfo?: IPullRequestInfo;
  comments?: IReviewComment[];
};

export interface IPullRequestProcessor {
  /**
   * Performs code review on file changes
   * @param prInfo Pull request information
   * @param files List of file changes to review
   * @returns Review comments
   */
  process(prInfo: IPullRequestInfo, files: IFileChange[]): Promise<IPullRequestProcessedResult>;

  // TODO: will be implemented in the future
  // getPullRequestInfo(): Promise<IPullRequestInfo>;
  // updatePullRequestTitle(title: string): Promise<void>;
  // updatePullRequestBody(body: string): Promise<void>;
  // addLabels(labels: string[]): Promise<void>;
}
