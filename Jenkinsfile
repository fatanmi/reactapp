pipeline {
  agent any
  stages {
    stage('Build') {
      steps {
        script{
            docker build -t haryorbami/react:$BUILD_NUMBER
        }
            
           
      }
    }
    stage('Push to Docker hub'){
        withCredentials([[$class: 'UsernamePasswordMultiBinding', credentialsId: "dockerhub", usernameVariable: 'USERNAME', passwordVariable: 'PASSWORD']]) {
      steps{
          docker login -u $USERNAME -p $PASSWORD
          docker.push haryorbami/react:$BUILD_NUMBER
        }
        }
           
      }
    }

  }
}