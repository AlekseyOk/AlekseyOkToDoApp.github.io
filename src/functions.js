export const getDate = () => {
    let month=[];
    month[0]="Jan";
    month[1]="Feb";
    month[2]="Mar";
    month[3]="Apr";
    month[4]="May";
    month[5]="Jun";
    month[6]="Jul";
    month[7]="Аug";
    month[8]="Sep";
    month[9]="Oct";
    month[10]="Nov";
    month[11]="Dec";
    let today = new Date(),
    date = `${(today.getDate())} ${(month[today.getMonth()])} ${today.getFullYear()} ${today.getHours()}:${today.getMinutes()}`;
    return date
  }

 export const filterTasks = (tasks, activeFilter) => {
    switch (activeFilter) {
      case 'low':
        return tasks.filter(task => task.priority==='low');
      case 'medium':
        return tasks.filter(task => task.priority==='medium');
      case 'hight':
        return tasks.filter(task => task.priority==='hight');
      case 'no priority':
            return tasks.filter(task => task.priority==='no priority');
      case 'old':
        return tasks.sort(function (a, b) {

          if (a.id > b.id) {
            return 1;
          }
          if (a.id < b.id) {
            return -1;
          }
          return 0;
        });
      case 'all':
        return tasks.sort(function (a, b) {
        
        if (a.id > b.id) {
          return -1;
        }
        if (a.id < b.id) {
          return 1;
        }
        return 0;
      });
      default:
        return tasks;
    }
  }