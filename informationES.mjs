export const birthday = new Date('10.03.1987');
export const Age = Math.floor ((new Date() - birthday) / 31556952000 );

const data = {
    name: 'максим лескин',
    dateBirth: birthday ,
    purpose: 'карьерный рост'
};

const words = data.name.split(' ');
export const firstName = words[0][0].toUpperCase() + words[0].substring(1);
export const lastName = words[1][0].toUpperCase() + words[1].substring(1);
export const dataBirth = birthday.toLocaleDateString();
export const purpose = data.purpose[0].toUpperCase() + data.purpose.substring(1);
export const id =  Math.random().toString(36).substring(3);

