import EventImitter from "events"

// const emitter  = new EventImitter()

// emitter.on("anything", data => {
//     console.log("ON: anything", data)
// })

// emitter.emit("anything", {a:1})
// emitter.emit("anything", {b:2})

// setTimeout(() => {
//     emitter.emit("anything", {c:3})
// },1500)


class Dispatcher extends EventImitter {
    subscribe(eventName,callback) {
        console.log("[Subscribe...]")
        this.on(eventName,callback)
    }

    dispatch(eventName,data) {
        console.log("[Dispatching]")
        this.emit(eventName, data)
    }
}

const dis = new Dispatcher

dis.subscribe("event", data => {
    console.log("ON: event", data)
})

dis.dispatch("event", {event:22})

