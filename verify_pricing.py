from playwright.sync_api import sync_playwright

def verify_pricing_page():
    with sync_playwright() as p:
        browser = p.chromium.launch()
        page = browser.new_page()

        # Navigate to the local server
        page.goto("http://localhost:3001/#/pricing")

        # Wait for the page to load
        page.wait_for_load_state("networkidle")

        # Take a screenshot of the entire page
        page.screenshot(path="pricing_page_verification.png", full_page=True)

        browser.close()

if __name__ == "__main__":
    verify_pricing_page()
