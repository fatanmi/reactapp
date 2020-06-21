pipeline {
  environment {
    registry = "haryorbami/react"
    registryCredential = 'dockerhub'
  }
  agent any
  stages {

    
    stage('Build') {
      steps {
        sh '''
            docker build -t haryorbami/react:$BUILD_NUMBER -f Dockerfile.dev .
            
            
        '''     
      }
      
    }
    stage('Test'){
        steps {
          sh 'docker build -f Dockerfile.dev -- --coverage .'
        }
      }
    stage('Push to Docker hub') {
      steps {
        withCredentials([[$class: 'UsernamePasswordMultiBinding', credentialsId: 'dockerhub', usernameVariable: 'USERNAME', passwordVariable: 'PASSWORD']]) {
      sh '''
          docker login -u $USERNAME -p $PASSWORD
          docker tag haryorbami/react:$BUILD_NUMBER haryorbami/react:latest
          docker push haryorbami/react:$BUILD_NUMBER
          docker run -p 3000:3000 --rm -d --name reactapp haryorbami/react
       
        '''
        }
      }
   
  } 
   stage('Remove Unused docker image') {
      steps{
         sh 'docker rmi $registry:$BUILD_NUMBER'
         sh 'curl localhost:3000'
      }
    }
}
}

