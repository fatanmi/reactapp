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
           docker build -t haryorbami/react:$BUILD_NUMBER .
                                  
        '''     
      }
      
    }
    stage('Test'){
        steps {
          sh '''

            docker build -t haryorbami/reacttest:$BUILD_NUMBER .
            
            '''
        }
      }
    stage('Push to Docker hub') {
      steps {
        withDockerRegistry([url: "", credentialsId: 'dockerhub']) {

        //}
        //withCredentials([[$class: 'UsernamePasswordMultiBinding', credentialsId: 'dockerhub', usernameVariable: 'USERNAME', passwordVariable: 'PASSWORD']]) {
      sh '''
          docker tag haryorbami/react:$BUILD_NUMBER haryorbami/react:latest
          docker push haryorbami/react:$BUILD_NUMBER
          
       
        '''
        }
 
        }

      }
    stage('Remove Unused docker image') {
        steps{
          sh 'docker rmi $registry:$BUILD_NUMBER'
          
        }
    }
  
    stage('Create Cluster'){
        steps {
          withCredentials([[$class: 'AmazonWebServicesCredentialsBinding', accessKeyVariable: 'AWS_ACCESS_KEY_ID', credentialsId: 'awscredentials', secretKeyVariable: 'AWS_SECRET_ACCESS_KEY']]) {

          sh '''
              eksctl create cluster \
              --name prod \
              --version 1.17 \
              --region us-east-1 \
              --nodegroup-name standard-workers \
              --node-type t2.micro \
              --nodes 3 \
              --nodes-min 1 \
              --nodes-max 3 \
              --managed

             '''
          sh '''

              kubectl apply -f clientdeploy.yaml
              kubectl apply -f appserver.yaml

             '''



          }
        }
    }
    
}
}



