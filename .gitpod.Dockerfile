FROM gitpod/workspace-full

# Install `MySQL`
FROM gitpod/workspace-mysql

# Install custom tools, runtimes, etc.
# For example "bastet", a command-line tetris clone:
# RUN brew install bastet
#
# More information: https://www.gitpod.io/docs/config-docker/

# Install personalize module
RUN sudo yarn global add pm2 \
RUN sudo yarn global add expo-cli \
RUN sudo yarn global add react-native \
RUN sudo yarn global add @vue/cli

# RUN sudo npm install pm2 -g \
#     && sudo npm install expo-cli -g \
#     && sudo npm install react-native -g \
#     && sudo npm install @vue/cli