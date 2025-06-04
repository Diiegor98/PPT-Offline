export const state = {
  data: JSON.parse(localStorage.getItem("state") as string) || {
    game: {
      myPlay: "",
      machinePlay: "",
    },
    history: {
      winners: "0",
      losses: "0",
    },
  },
  listeners: [],
  getState() {
    return this.data;
  },
  setState(newState) {
    this.data = newState;
    localStorage.setItem("state", JSON.stringify(newState));
    console.log("Se ha realizado un cambio en el state:", newState);

    for (const cb of this.listeners) {
      cb();
    }
  },
  suscribe(callback: (any) => any) {
    this.listeners.push(callback);
  },
  setGame(myChoice: string, machineChoice: string) {
    const newState = {
      ...this.getState(),
      game: {
        myPlay: myChoice,
        machinePlay: machineChoice,
      },
    };
    this.setState(newState);
  },
  setHistory(myChoice: string, machineChoice: string) {
    const win =
      (myChoice === "piedra" && machineChoice === "tijera") ||
      (myChoice === "papel" && machineChoice === "piedra") ||
      (myChoice === "tijera" && machineChoice === "papel")
        ? 1
        : 0;
    const loss =
      (myChoice === "piedra" && machineChoice === "papel") ||
      (myChoice === "papel" && machineChoice === "tijera") ||
      (myChoice === "tijera" && machineChoice === "piedra")
        ? 1
        : 0;
    console.log(
      "myChoice:",
      myChoice,
      "machineChoice:",
      machineChoice,
      "win:",
      win.toString(),
      "loss:",
      loss.toString()
    );

    const newState = {
      ...this.getState(),
      history: {
        winners: (parseInt(this.getState().history.winners) + win).toString(),
        losses: (parseInt(this.getState().history.losses) + loss).toString(),
      },
    };
    this.setState(newState);
  },
  clearHistory() {
    const newState = {
      ...this.getState(),
      history: {
        winners: "0",
        losses: "0",
      },
    };
    this.setState(newState);
  },
};