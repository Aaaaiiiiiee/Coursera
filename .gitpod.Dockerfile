FROM gitpod/workspace-full

# Install `MySQL`
FROM gitpod/workspace-mysql

# Install custom tools, runtimes, etc.
# For example "bastet", a command-line tetris clone:
# RUN brew install bastet
#
# More information: https://www.gitpod.io/docs/config-docker/

# Install personalize module
RUN sudo apt update \
    && sudo apt install -y \
    && sudo apt install redis-server -y \
    && sudo rm -rf /var/lib/apt/lists/*

# RUN curl -sL https://nginx.org/keys/nginx_signing.key | sudo apt-key add - \
#     && echo "deb https://packages.nginx.org/unit/ubuntu/ focal unit deb-src https://packages.nginx.org/unit/ubuntu/ focal unit" >> /etc/apt/sources.list.d/unit.list \
#     && sudo apt install unit \
#     && sudo apt install unit-dev unit-go unit-jsc11 unit-perl unit-php unit-python2.7 unit-python3.8 unit-ruby
    
RUN pm2 global add pm2 \
    && yarn global add expo-cli \
    && yarn global add react-native \
    && yarn global add @vue/cli

# RUN sudo npm install pm2 -g \
#     && sudo npm install expo-cli -g \
#     && sudo npm install react-native -g \
#     && sudo npm install @vue/cli