pipeline {
  agent any
  stages {
    // stage('Build') {
    //   steps {
    //     sh '''
    //         docker build -t myfirstbuld .
    //         docker images
            
    //         '''
    //   }
    // }
    stage('Push to docker hub'){
      steps{
        withCredentials([string(credentialsId: 'dockerhub', password: 'registryPassword',
            username: 'registryUsername')])
            {
              sh 'docker login -u ${registryUsername} -p ${registryPassword}'
              echo ''
            }
      }
    }

  }
}