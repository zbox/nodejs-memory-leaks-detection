# Detecting NodeJS Garbage Collection issues

Since NodeJS applications are long-running processes and JS is a language with out-of-the-box memory management it's necessary to keep an eye on garbage collection, detect memory leaks and other cases where memory strategy could be improved.

That includes performance testing as part of development process and application monitoring in production (e.g. Prometheus/Grafana).
![alt text](./res/1.png)


To identify memory problems we have to collect metrics about event loop lag, resident set size, heap memory and CPU usage.

### Event loop lag
![alt text](./res/2-1.png)

### Heap usage
![alt text](./res/2-2.png)

### Tracing GC
![alt text](./res/2.png)


Once problem identified connecting to NodeJS processes with debugging client. Then taking snapshots and comparing snapshots of the heap.
### Heap snapshots
![alt text](./res/3.png)

An alternative approach is to generate a code dump, inspect objects in memory and look at the backtrace of a program.
