export function selectTab(tabId) {
    return {
        type: 'TAB_SELECTED',
        payload: tabId
    }
}
showTabs('tabList', 'tabCreate')

export function showTabs(...tabIds) {
    // Retorna um objeto das abas que devem ser exibidas quando a acao for processada pelos reducers
    const tabsToShow = {}
    tabIds.forEach(e => tabsToShow[e] = true)
    // Toda action precisa ter um type
    return {
        type:'TAB_SHOWED',
        payload: tabsToShow
    }
}