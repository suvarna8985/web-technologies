function showDetails(stage) {
  const details = {
    awareness: "Touchpoints: Ads, Social Media, SEO.\nGoal: Introduce the brand.",
    consideration: "Touchpoints: Website, Reviews, Comparisons.\nGoal: Help users evaluate options.",
    purchase: "Touchpoints: Product Page, Cart, Checkout.\nGoal: Convert to customer.",
    retention: "Touchpoints: Email, Support, Loyalty Program.\nGoal: Encourage repeat engagement."
  };

  document.getElementById("details-text").innerText = details[stage];
}
