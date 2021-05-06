//侧边栏
module.exports = {
  "/cs/backend/java/": [
    {
      title: "Java基础",
      collapsable: true,
      children: [
        "java-basic/00_resources",
        "java-basic/01_install",
        "java-basic/02_reflect",
        "java-basic/03_io",
        "java-basic/04_copy_on_write",
        "java-basic/05_dynamic_proxy",
        "java-basic/06_hot_deploy",
        "java-basic/07_java8",
        "java-basic/08_regular_expression",
        "java-basic/09_multiple_time_zone",
        "java-basic/10_bean_mapping_framework",
        "java-basic/11_annotation",
      ],
    },
    {
      title: "Java虚拟机",
      collapsable: true,
      children: [
        "jvm/00_resources",
        "jvm/01_core_knowledge_diagram",
        "jvm/02_performance_monitor_and_analysis",
        "jvm/03_online_troubleshooting",
        "jvm/04_performance_optimization_guide",
      ],
    }, {
      title: "Java并发",
      collapsable: true,
      children: [
        "java-concurrency/00_resources",
        "java-concurrency/01_java_concurrency_basic",
        "java-concurrency/02_cpu_multi_level_cache",
        "java-concurrency/03_the_underlying_realization_principle_of_java_concurrency_mechanism",
        "java-concurrency/04_java_memory_model",
        "java-concurrency/05_lock",
        "java-concurrency/06_java_concurrent_container",
        "java-concurrency/07_java_concurrent_tool",
        "java-concurrency/08_thread_pool",
        "java-concurrency/09_visible_threadlocal",
        "java-concurrency/10_unsafe",
        "java-concurrency/11_simulate_concurrency",
      ],
    },
  ],
};
