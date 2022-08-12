import eternalData from './_data/data.toml';

export type Dtml = typeof eternalData;
export const data = { ...eternalData };
export default data;
