kubectl get deployments
kubectl delete deployment 
helm uninstall ${KUBE_SERVICE}
helm dependency update
helm install ${KUBE_SERVICE} .