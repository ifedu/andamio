import { Task } from 'root/core/seed'

class TaskFile extends Task {
    constructor() {
        super(__filename)
    }

    protected init(cb: any) {
        this.run(
            'build',
            'copy.assets',
            'electron.run',
            'webserver',
            cb
        )
    }
}

new TaskFile()
