export function getStartTime() {
    let start = new Date();
    const month = start.getMonth() - 1;
    start.setMonth(month);
    return start;
}