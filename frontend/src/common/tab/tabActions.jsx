export function selectTab(tabId) {
    console.log(tabId);
    // Funcao ActionCreator - para criar uma acao
    return {
        type: 'TAB_SELECTED',
        payload: tabId
    }
}