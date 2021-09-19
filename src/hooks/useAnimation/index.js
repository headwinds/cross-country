/*
  animateMachineText() {
    const { mlTask } = this.state;
    const startTask = 'Learning';
    const endTask = 'Teaching';
    const len = startTask.length - 1;
    const cursor = '_';
    let newMLTask = startTask;
    let mlTaskIndex = len;

    const characterMilliseconds = 100;

    setTimeout(() => {
      let mlTextAnimateInterval = setInterval(() => {
        if (newMLTask.includes('Le')) {
          newMLTask = ` ${startTask.substr(0, mlTaskIndex)}${cursor}`;

          mlTaskIndex--;
          return this.setState({ mlTask: newMLTask });
        } else {
          newMLTask = ` ${endTask.substr(0, mlTaskIndex)}${cursor}`;
          mlTaskIndex++;

          if (mlTaskIndex > endTask.length) {
            clearInterval(mlTextAnimateInterval);
            return this.setState({ mlTask: endTask });
          }

          return this.setState({ mlTask: newMLTask });
        }
      }, characterMilliseconds);
    }, 5000);
  }
  */
