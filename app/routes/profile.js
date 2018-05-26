import Route from "@ember/routing/route";

export default Route.extend({
  model() {
    return [
      { name: "tao", description: "tao awesome" },
      { name: "ning", description: "tao VLOG" }
    ];
  }
});
