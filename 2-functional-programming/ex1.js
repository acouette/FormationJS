const tasks = [
    {
        name: 'Write some code',
        duration: 120
    },
    {
        name: 'Eat',
        duration: 60
    },
    {
        name: 'Cut the grass',
        duration: 240
    }

];

//Utiliser la méthode map d’un array pour renvoyer un tableau qui contient la liste des noms de tâche.
const taskNames = tasks.map(t=> t.name);
console.log('taskNames', taskNames);

//Utiliser la méthode filter pour renvoyer un tableau de nom de tâches dont la durée dépasse 100.
const taskWithDurationOver100 = tasks.filter(t=>t.duration > 100).map(t=> t.name);
console.log('taskWithDurationOver100', taskWithDurationOver100);

//Utiliser la méthode reduce pour calculer la moyenne de la durée des tâches
const average = tasks.map(t=> t.duration)
    .reduce((prev, curr, index, array)=> {
        return prev + curr / array.length
    }, 0);

console.log('average', average);

