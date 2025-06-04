const worker = new Worker("workerScript.js");
worker.postMessage("some data");
