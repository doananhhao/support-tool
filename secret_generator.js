const TEMPLATE = "kubectl create secret generic {secretName} {data} -n {nameSpace}";
const KEY_TEMPLATE_WIN = "--from-literal={key}={data}";
const KEY_TEMPLATE_MAC = "--from-literal={key}='{data}'";

function generateForWin(secretName, nameSpace, data) {
    let compeletedData = [];
    for (let k in data) {
        let keyData = KEY_TEMPLATE_WIN
            .replace("{key}", k)
            .replace("{data}", window.atob(data[k]));
        compeletedData.push(keyData);
    }
    return TEMPLATE
        .replace("{secretName}", secretName)
        .replace("{data}", compeletedData.join(" "))
        .replace("{nameSpace}", nameSpace);
}

function generateForMac(secretName, nameSpace, data) {
    let compeletedData = [];
    for (let k in data) {
        let keyData = KEY_TEMPLATE_MAC
            .replace("{key}", k)
            .replace("{data}", window.atob(data[k]));
        compeletedData.push(keyData);
    }
    return TEMPLATE
        .replace("{secretName}", secretName)
        .replace("{data}", compeletedData.join(" "))
        .replace("{nameSpace}", nameSpace);
}