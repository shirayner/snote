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
      ],
    },
    {
      title: "Jvm",
      collapsable: true,
      children: [
        "jvm/00_resources",
        "jvm/01_core_knowledge_diagram",
        "jvm/02_performance_monitor_and_analysis",
        "jvm/03_online_troubleshooting",
        "jvm/04_performance_optimization_guide",
      ],
    },
  ],
};
