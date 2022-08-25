import { SimpleGit, simpleGit } from "simple-git";

export default class MyClass {
  private git;
  constructor() {
    this.git = simpleGit();
  }
  public async f(url: string) {
    try {
      // await this.git.raw("ls-remote", url);
      await this.g(url.includes("empty-repo"));
      return true;
    } catch (e) {
      return false;
    }
  }

  private g(b: boolean) {
    return new Promise((resolve, reject) => {
      setTimeout(() => (b ? resolve(b) : reject()), 2000);
    });
  }
}
