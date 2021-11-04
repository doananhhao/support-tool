const TEMPLATE = "kubectl create secret generic {secretName} {data} -n {nameSpace}";
const KEY_TEMPLATE = "--from-literal={key}={data}";

function generate(secretName, nameSpace, data) {
    let compeletedData = [];
    for (let k in data) {
        let keyData = KEY_TEMPLATE
            .replace("{key}", k)
            .replace("{data}", window.atob(data[k]));
        compeletedData.push(keyData);
    }
    return TEMPLATE
        .replace("{secretName}", secretName)
        .replace("{data}", compeletedData.join(" "))
        .replace("{nameSpace}", nameSpace);
}