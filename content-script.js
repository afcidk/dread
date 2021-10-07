var body = document.querySelector('body')

var observer = new MutationObserver(mutationCb);
startObserve();

function mutationCb(mutations) {
    mutations.forEach(m => {
        if (m.type === "attributes") {
            observer.disconnect();

            document.body.setAttribute("style", "overflow: scroll");
            let portal = document.querySelector('.__portal')
            portal.parentElement.removeChild(portal);

            startObserve();
        }
    });
}

function startObserve() {
    observer.observe(document.body, {attributes: true});
}

