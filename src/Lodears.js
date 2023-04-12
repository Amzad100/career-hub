import { getShoppingCart } from "./fakedb";

const jobsLoader = async () => {
    const loadedJobs = await fetch('features.json');
    const jobs = await loadedJobs.json();

    const storedJobs = getShoppingCart();

    const savedJobs = [];

    for (const id in storedJobs) {
        const addedJobs = jobs.find(pd => pd.id === id);
        if (addedJobs) {
            const quantity = storedJobs[id];
            addedJobs.quantity = quantity;
            savedJobs.push(addedJobs);
        }
    }
    return savedJobs;
}

export default jobsLoader;