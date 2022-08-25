import MyClass from "../src/simple_code";

describe("Describe", () => {
  it("should return true", async () => {
    const c = new MyClass();
    const r = await c.f("git@github.com:xp500/empty-repo.git");
    expect(r).toBeTruthy();
  });

  it("should return false", async () => {
    const c = new MyClass();
    const r = await c.f("git@github.com:xp500/emptasdy-repo.git");
    expect(r).toBeTruthy();
  });
});
