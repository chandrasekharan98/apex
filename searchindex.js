Search.setIndex({docnames:["RNN","amp","fp16_utils","index","optimizers","parallel","reparameterization"],envversion:53,filenames:["RNN.rst","amp.rst","fp16_utils.rst","index.rst","optimizers.rst","parallel.rst","reparameterization.rst"],objects:{"apex.fp16_utils":{DynamicLossScaler:[2,1,1,""],FP16_Optimizer:[2,1,1,""],Fused_Weight_Norm:[2,1,1,""],LossScaler:[2,1,1,""],master_params_to_model_params:[2,3,1,""],model_grads_to_master_grads:[2,3,1,""],prep_param_lists:[2,3,1,""]},"apex.fp16_utils.FP16_Optimizer":{backward:[2,2,1,""],clip_master_grads:[2,2,1,""],inspect_master_grad_data:[2,2,1,""],load_state_dict:[2,2,1,""],state_dict:[2,2,1,""],step:[2,2,1,""],update_master_grads:[2,2,1,""],zero_grad:[2,2,1,""]},"apex.optimizers":{FusedAdam:[4,1,1,""]},"apex.optimizers.FusedAdam":{step:[4,2,1,""]},"apex.parallel":{DistributedDataParallel:[5,1,1,""],Reducer:[5,1,1,""],SyncBatchNorm:[5,1,1,""],convert_syncbn_model:[5,3,1,""]},apex:{fp16_utils:[2,0,0,"-"],optimizers:[4,0,0,"-"],parallel:[5,0,0,"-"]}},objnames:{"0":["py","module","Python module"],"1":["py","class","Python class"],"2":["py","method","Python method"],"3":["py","function","Python function"]},objtypes:{"0":"py:module","1":"py:class","2":"py:method","3":"py:function"},terms:{"1e7":5,"boolean":[4,5],"case":2,"catch":5,"class":[2,4,5],"default":[2,4,5],"final":2,"float":[2,4,5],"import":[2,5],"int":[2,5],"long":2,"new":2,"return":[2,4],"static":2,"switch":5,"true":[2,5],"while":1,For:2,NOT:4,The:[1,2,3,5],These:2,Use:2,_batchnorm:5,abov:2,accept:2,access:2,accumul:2,accuraci:5,achiev:[1,5],across:5,adam:4,add:2,added:[4,5],addit:[2,5],adjust:2,advanc:2,affect:2,affin:5,after:[2,5],against:2,algorithm:4,all:[1,2,5],allow:2,allreduc:5,allreduce_always_fp32:5,allreduce_trigger_param:5,also:[1,2,5],although:2,alwai:[2,5],amp:3,amsgrad:4,analog:2,ani:[2,5],annoi:2,anoth:[2,5],api:[1,3],appli:2,applic:5,arg:[2,5],argument:[2,5],around:5,associ:2,assum:[2,5],attempt:2,attribut:2,automat:[1,3,5],avail:3,averag:[4,5],back:5,backward:[2,5],batch:5,batch_norm:5,batchnorm:5,batchnormnd:5,batchsiz:5,becaus:2,becom:2,been:[2,4],befor:[2,5],begin:[2,5],behav:2,behavior:2,being:[2,5],belong:2,below:2,benefit:1,beta:4,beyond:4,bool:[2,5],both:5,broadcast:5,bucket:5,built:2,call:[2,5],callabl:4,came:[2,5],can:[2,5],care:2,carri:5,certain:2,chang:2,check:2,checkpoint:2,children:5,choos:2,cleanup:5,clip:2,clip_grad_norm:2,clip_master_grad:2,clone:3,closur:[2,4],code:[2,3],coeffici:4,collect:5,com:[1,3,5],combat:2,combin:5,commun:5,compat:2,complet:1,comput:[2,4,5],conceptu:2,consecut:2,construct:[0,2,6],constructor:[2,5],contain:[2,3,5],control:[2,5],converg:[4,5],convert:[2,5],convert_syncbn_model:5,copi:2,core:[1,2],correct:2,correspond:2,cpp_ext:3,creat:[2,5],criterion:2,cross:2,cuda:[2,3,5],cuda_ext:3,cumul:5,current:[1,2],d_in:2,d_out:2,data:[2,5],dataset:2,date:3,decai:4,def:2,defin:[2,4],definit:5,delai:[2,5],delay_allreduc:5,demo:2,demonstr:2,denomin:[4,5],depend:2,design:[1,2,5],detail:[2,5],detect:2,dict:[2,4],differ:2,diminish:5,directli:2,disabl:[2,5],distribut:[2,3,5],distributeddataparallel:[2,5],divid:2,docstr:2,document:[1,3],doe:5,downscal:2,drawn:5,dure:[2,5],dynam:[1,2,5],dynamic_loss_arg:2,dynamic_loss_scal:2,dynamiclossscal:2,each:2,earlier:2,eas:1,easi:[1,5],easili:5,edg:2,effect:5,effici:2,either:[2,5],element:[2,5],elimin:2,enabl:[2,5],encount:2,end:[2,5],entropi:2,epoch:2,eps:[4,5],eps_inside_sqrt:4,etc:2,eval:5,evalu:5,eventu:3,everi:5,exampl:[2,5],exist:2,expect:[2,5],extent:5,factor:2,fall:5,fals:[2,4,5],faster:1,file:2,first:2,flat_mast:2,flatten:2,flow:2,follow:2,foral:2,forward:2,found:2,fp16:[1,2,3,5],fp16_optim:2,fp16_optimizer_inst:2,fp16_optimizer_obj:2,fp16_util:3,fp32:[1,2,5],fp32_loss:2,fresh:2,friendli:1,from:[2,4,5],full:[1,2,5],fuse:[2,3],fused_weight_norm:2,fusedadam:4,futur:2,gener:2,git:3,github:[1,2,3,5],give:5,given:[2,5],gpu:5,grad:[2,4,5],gradient:[2,4,5],gradient_average_split_factor:5,group:[2,4],gtc:2,guarante:2,half:2,handl:2,has:[2,4,5],have:2,help:5,here:3,high:[2,5],higher:2,highest:2,hood:1,how:2,howev:2,http:[1,3,5],hyperparamet:2,ident:2,ignor:5,imagenet:[2,5],immedi:2,implement:[1,2,4],improv:[4,5],includ:3,increas:[2,5],incur:2,index:3,indirectli:2,inf:2,infin:2,inform:2,ingest:2,init_optim:2,init_scal:2,initi:[2,5],inp:5,input:[2,5],inspect:2,inspect_master_grad_data:2,instal:3,instanc:[2,5],instead:5,intend:[2,5],intent:[1,3],interact:2,intern:2,iron:2,iter:[2,4,5],its:[4,5],kei:2,kernel:2,kick:5,kwarg:2,larg:2,later:[2,3],launch:5,launcher:5,layer:5,learn:[2,4],learnabl:5,leav:2,less:2,let:5,like:5,line:2,linear:2,list:[2,5],load:2,load_state_dict:2,longer:2,loss1:2,loss2:2,loss:[1,4],loss_fn:2,loss_scal:2,lossscal:2,lower:2,made:2,mai:2,main_reduc:5,maintain:3,make:[3,5],manipul:2,manner:2,manual:5,map:5,master:[1,5],master_param:2,master_params_to_model_param:2,match:2,math:1,max:2,max_norm:2,maximum:[1,2],mean:[2,5],message_s:5,method:4,might:2,minibatch:2,minimum:5,mix:[1,2,3,5],mixtur:2,mode:5,model:[2,4,5],model_grads_to_master_grad:2,model_param:2,modifi:2,modul:[2,3,5],module_or_grads_list:5,momentum:5,more:2,most:[1,2],move:5,mse:2,mul_:5,multi:5,multi_gpu:2,multipl:[2,5],multiprocess:5,must:2,naiv:2,name:2,nccl:5,necessari:2,need:2,network:[2,5],neural:2,new_loss_scal:2,newli:2,node:5,none:[2,4,5],nonintuit:2,norm:2,norm_typ:2,normal:5,note:2,now:2,nproc_per_nod:5,num_featur:5,number:[2,5],numer:[1,4,5],nvidia:[1,2,3,5],object:2,occur:2,off:5,onc:2,one:[2,5],ones:2,onli:2,oppos:5,ops:1,optim:[2,3,5],option:[2,4,5],ordinari:2,organ:2,origin:2,orthogon:2,other:2,our:2,out:[2,5],output:2,output_param:4,over:[2,5],overflow:2,overlap:5,overrid:2,ownership:2,packag:5,page:[1,2],paper:4,parallel:[2,3],param:4,param_group:2,paramet:[4,5],partial:5,particip:5,particular:2,pass:[2,5],penalti:4,per:5,perform:[1,2,4,5],place:2,pleas:2,possibl:[2,3],potenti:1,practic:2,precis:[1,2,3,5],preexist:2,prep_param_list:2,present:2,previous:2,print:2,prior:2,problem:2,proces:5,process:5,proof:2,properli:2,propos:4,provid:2,pth:2,python:[2,3],pytorch:2,quickli:3,ramp:1,randn:5,rang:5,rank:5,rate:[2,4],readjust:2,real:2,reason:2,receiv:[2,5],recent:2,recip:2,recommend:2,recurs:5,reduc:5,reducer_inst:5,reduct:5,redund:2,reevalu:4,refactor:2,refer:2,referenc:2,regard:2,remain:5,rememb:2,replac:[2,5],requir:[2,3,5],reserv:2,resid:1,respons:[2,5],result:2,retain_allreduce_buff:5,retriev:2,retun:2,ride:2,right:2,run:[2,3,4,5],runnabl:2,running_mean:5,running_var:5,safe:1,safeti:[1,2],same:[2,5],saniti:2,save:2,sbn:5,scale:[1,4,5],scale_factor:2,scale_window:2,scaled_loss:2,schedul:2,script:[2,5],second:2,see:2,self:2,session:2,set:[2,5],set_devic:5,set_grads_to_non:2,setup:3,sever:5,sgd:2,shape:2,shared_param:5,should:[2,5],show:5,similar:5,simpl:[2,5],singl:[2,4,5],site:3,size:5,skip:2,small:5,smaller:[2,5],some:[2,3,5],sourc:[2,4,5],squar:4,stabil:[1,4,5],standard:2,stat:5,state:2,state_dict:2,static_loss_scal:2,statist:5,step:[2,4],still:2,stochast:4,store:2,streamlin:[2,3],stress:5,submodul:2,subtl:2,suppli:[2,5],support:4,sure:5,sync:5,sync_bn_model:5,syncbatchnorm:5,synchron:5,take:2,target:2,technic:2,tensor:[1,2,5],term:4,thei:[2,5],them:2,theori:2,thi:[2,3,4,5],thing:2,those:2,time:2,tool:1,torch:[2,5],total:[2,5],track:5,track_running_stat:5,train:[1,2,3,5],transfer:5,transpar:2,travers:5,tree:[1,5],truth:2,tupl:[2,4],turn:2,two:2,type:2,under:[0,1,6],underflow:2,underli:2,understand:2,uniqu:2,unlik:5,unnecessari:2,unsaf:1,unspecifi:2,until:2,updat:2,update_master_grad:2,upstream:[3,5],usag:5,use:[1,2,4,5],used:[2,4,5],useful:[2,5],user:[2,3,5],uses:5,using:[1,2],usual:2,util:[2,3],valid:2,valu:[2,5],varianc:5,variant:4,vector:2,verbos:2,veri:2,via:2,view:2,wai:2,wait:[2,5],want:2,weight:[2,4],weight_decai:4,weightnorm:2,well:2,when:[2,5],whenev:5,where:5,whether:4,which:2,whose:2,wide:5,within:2,without:2,word_language_model:2,work:[2,5],world:5,would:5,wrap:[2,5],wrapper:5,www:3,you:[2,5],your:[2,5],zero:2,zero_grad:2},titles:["apex.RNN","apex.amp","apex.fp16_utils","Apex (A PyTorch Extension)","apex.optimizers","apex.parallel","apex.reparameterization"],titleterms:{"function":5,amp:1,apex:[0,1,2,3,4,5,6],automat:2,custom:2,extens:3,fp16_util:2,indic:3,loss:2,manag:2,manual:2,master:2,oper:2,optim:4,parallel:5,param:2,paramet:2,pytorch:3,reparameter:6,rnn:0,scale:2,tabl:3,util:5}})