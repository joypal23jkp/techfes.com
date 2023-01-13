import Card from "~/components/common/Card.vue";
import { render } from "@testing-library/vue";

describe("Common test", () => {
  it("should test", function () {
    const wrapper = render(Card);
  });
});
