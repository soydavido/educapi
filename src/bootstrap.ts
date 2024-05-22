import DatabaseProvider from "./providers/database.provider";
import { HomeRoute } from "./routes/home.route";
import { InfoRoute } from "./routes/info.route";
import LogProvider from "./providers/log.provider";
import CacheProvider from "./providers/cache.provider";
import { LogsListRoute } from "./routes/logs_list.route";
import RouterProvider from "./providers/router.provider";
import { TestWorkerRoute } from "./routes/test_worker.route";
import { TestWorker } from "./workers/test.worker";
import { JobsMonitorRoute } from "./routes/jobs_monitor.route";
import {
    BoostrapInterface,
    RouteContract,
    ServiceProviderContract,
    WorkerContract,
    ConsumerContract
} from "@ant/framework";
import { TaskContract } from "@ant/framework/lib/src/scheduler";
import TasksProvider from "./providers/tasks.provider";
import { TestTask } from "./tasks/test.task";
import KafkaProvider from "./providers/kafka.provider";
import { KafkaTask } from "./tasks/kafka.task";
import { KafkaRoute } from "./routes/kafka.route";
import { TestConsumer } from "./consumers/test.consumer";
import { EventProvider } from "./providers/event.provider";
import { ListenerContract } from "@ant/framework/lib/src/events";
import { TestListener } from "./listeners/test.listener";
import { TestEventRoute } from "./routes/test_event.route";
import { DatabaseRoute } from "./routes/database.route";

export class Boostrap implements BoostrapInterface {
    /**
     * The declared application's service providers.
     */
    public providers: (new(boostrap: BoostrapInterface) => ServiceProviderContract)[] = [
        LogProvider,
        DatabaseProvider,
        RouterProvider,
    ];

    /**
     * The declared application's routes. 
     */
    public routes:  (new() => RouteContract)[] = [
        HomeRoute,
        InfoRoute,
        DatabaseRoute
    ];

    /**
     * The declared application's workers. 
     */
    public workers: (new() => WorkerContract)[] = [
        
    ];

    /**
     * The declared application's workers. 
     */
    public consumers: (new() => ConsumerContract)[] = [
        
    ];

    /**
     * The declared application's tasks. 
     */
    public tasks: (new () => TaskContract)[] = [

    ];

    /**
     * The declared application's event listeners. 
     */
    listeners: (new () => ListenerContract)[] = [
        
    ];
}
