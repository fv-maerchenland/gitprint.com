module.exports = {
    apps : [{
        name        : "Gitprint Server",
        uid         : "apache",
        gid         : "apache",
        script      : "./bin/www",
        watch       : true,
        "ignore_watch" : ["cache"],
        env: {
            "NODE_ENV": "development"
        },
        env_production : {
            "NODE_ENV": "production"
        }
    }]
};
