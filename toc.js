// Populate the sidebar
//
// This is a script, and not included directly in the page, to control the total size of the book.
// The TOC contains an entry for each page, so if each page includes a copy of the TOC,
// the total size of the page becomes O(n**2).
class MDBookSidebarScrollbox extends HTMLElement {
    constructor() {
        super();
    }
    connectedCallback() {
        this.innerHTML = '<ol class="chapter"><li class="chapter-item expanded "><a href="chapter1/index.html"><strong aria-hidden="true">1.</strong> Introduction to RAG</a></li><li><ol class="section"><li class="chapter-item expanded "><a href="chapter1/rag-def.html"><strong aria-hidden="true">1.1.</strong> What is RAG?</a></li><li class="chapter-item expanded "><a href="chapter1/rag-importance.html"><strong aria-hidden="true">1.2.</strong> Why RAG is Important?</a></li></ol></li><li class="chapter-item expanded "><a href="chapter2/index.html"><strong aria-hidden="true">2.</strong> RAG Foundations</a></li><li><ol class="section"><li class="chapter-item expanded "><a href="chapter2/core-components.html"><strong aria-hidden="true">2.1.</strong> Core Components</a></li><li class="chapter-item expanded "><a href="chapter2/Pipeline.html"><strong aria-hidden="true">2.2.</strong> Naive RAG Pipeline</a></li></ol></li><li class="chapter-item expanded "><a href="chapter3/index.html"><strong aria-hidden="true">3.</strong> The RAG Workflow</a></li><li><ol class="section"><li class="chapter-item expanded "><a href="chapter3/modules-overview.html"><strong aria-hidden="true">3.1.</strong> Overview of Modules</a></li><li class="chapter-item expanded "><a href="chapter3/vector-database.html"><strong aria-hidden="true">3.2.</strong> Vector Databases</a></li></ol></li><li class="chapter-item expanded "><a href="chapter4/index.html"><strong aria-hidden="true">4.</strong> Key Techniques and Tools</a></li><li><ol class="section"><li class="chapter-item expanded "><a href="chapter4/chunck-strategy.html"><strong aria-hidden="true">4.1.</strong> Chunking Strategies</a></li><li class="chapter-item expanded "><a href="chapter4/embedding-model.html"><strong aria-hidden="true">4.2.</strong> Embedding Models</a></li><li class="chapter-item expanded "><a href="chapter4/metadata.html"><strong aria-hidden="true">4.3.</strong> Metadata Usage</a></li></ol></li><li class="chapter-item expanded "><a href="chapter5/index.html"><strong aria-hidden="true">5.</strong> Advanced and Modular RAG</a></li><li><ol class="section"><li class="chapter-item expanded "><a href="chapter5/advanced-rag.html"><strong aria-hidden="true">5.1.</strong> Advanced RAG Improvements</a></li><li class="chapter-item expanded "><a href="chapter5/modular-rag.html"><strong aria-hidden="true">5.2.</strong> Modular RAG</a></li><li class="chapter-item expanded "><a href="chapter5/common-flow.html"><strong aria-hidden="true">5.3.</strong> Common Flow Patterns</a></li></ol></li><li class="chapter-item expanded "><a href="chapter6/index.html"><strong aria-hidden="true">6.</strong> RAG vs. Other LLM Enhancement Techniques</a></li><li><ol class="section"><li class="chapter-item expanded "><a href="chapter6/fine-rag.html"><strong aria-hidden="true">6.1.</strong> Fine-tuning vs. RAG</a></li><li class="chapter-item expanded "><a href="chapter6/prompt-rag.html"><strong aria-hidden="true">6.2.</strong> Prompt Engineering vs. RAG</a></li></ol></li><li class="chapter-item expanded "><a href="chapter7/index.html"><strong aria-hidden="true">7.</strong> Evaluation of RAG Systems</a></li><li><ol class="section"><li class="chapter-item expanded "><a href="chapter7/metrics.html"><strong aria-hidden="true">7.1.</strong> Metrics</a></li><li class="chapter-item expanded "><a href="chapter7/datasets-benchmark.html"><strong aria-hidden="true">7.2.</strong> Datasets and Benchmarks</a></li></ol></li><li class="chapter-item expanded "><a href="chapter8/index.html"><strong aria-hidden="true">8.</strong> Real-World Applications</a></li><li class="chapter-item expanded "><a href="chapter9/index.html"><strong aria-hidden="true">9.</strong> Challenges and Future Directions</a></li><li><ol class="section"><li class="chapter-item expanded "><a href="chapter9/common-challenges.html"><strong aria-hidden="true">9.1.</strong> Common Challenges</a></li><li class="chapter-item expanded "><a href="chapter9/future.html"><strong aria-hidden="true">9.2.</strong> Future Research</a></li></ol></li><li class="chapter-item expanded "><a href="References.html"><strong aria-hidden="true">10.</strong> REFERNCESE</a></li></ol>';
        // Set the current, active page, and reveal it if it's hidden
        let current_page = document.location.href.toString().split("#")[0];
        if (current_page.endsWith("/")) {
            current_page += "index.html";
        }
        var links = Array.prototype.slice.call(this.querySelectorAll("a"));
        var l = links.length;
        for (var i = 0; i < l; ++i) {
            var link = links[i];
            var href = link.getAttribute("href");
            if (href && !href.startsWith("#") && !/^(?:[a-z+]+:)?\/\//.test(href)) {
                link.href = path_to_root + href;
            }
            // The "index" page is supposed to alias the first chapter in the book.
            if (link.href === current_page || (i === 0 && path_to_root === "" && current_page.endsWith("/index.html"))) {
                link.classList.add("active");
                var parent = link.parentElement;
                if (parent && parent.classList.contains("chapter-item")) {
                    parent.classList.add("expanded");
                }
                while (parent) {
                    if (parent.tagName === "LI" && parent.previousElementSibling) {
                        if (parent.previousElementSibling.classList.contains("chapter-item")) {
                            parent.previousElementSibling.classList.add("expanded");
                        }
                    }
                    parent = parent.parentElement;
                }
            }
        }
        // Track and set sidebar scroll position
        this.addEventListener('click', function(e) {
            if (e.target.tagName === 'A') {
                sessionStorage.setItem('sidebar-scroll', this.scrollTop);
            }
        }, { passive: true });
        var sidebarScrollTop = sessionStorage.getItem('sidebar-scroll');
        sessionStorage.removeItem('sidebar-scroll');
        if (sidebarScrollTop) {
            // preserve sidebar scroll position when navigating via links within sidebar
            this.scrollTop = sidebarScrollTop;
        } else {
            // scroll sidebar to current active section when navigating via "next/previous chapter" buttons
            var activeSection = document.querySelector('#sidebar .active');
            if (activeSection) {
                activeSection.scrollIntoView({ block: 'center' });
            }
        }
        // Toggle buttons
        var sidebarAnchorToggles = document.querySelectorAll('#sidebar a.toggle');
        function toggleSection(ev) {
            ev.currentTarget.parentElement.classList.toggle('expanded');
        }
        Array.from(sidebarAnchorToggles).forEach(function (el) {
            el.addEventListener('click', toggleSection);
        });
    }
}
window.customElements.define("mdbook-sidebar-scrollbox", MDBookSidebarScrollbox);
