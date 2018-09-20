cc.Class({
    extends: cc.Component,

    properties: {
        dragonBone: {
            default: null,
            type: dragonBones.ArmatureDisplay
        }   
    },

    dynamicCreate () {
        cc.loader.loadRes('dragonBones/NewDragonTest', dragonBones.DragonBonesAsset, (err, res) => {
            if (err) cc.error(err);
            this.dragonBone.dragonAsset = res;
            cc.loader.loadRes('dragonBones/texture', dragonBones.DragonBonesAtlasAsset, this.onComplete.bind(this));
        });
    },

    onComplete (err, res) {
        if (err) cc.error(err);
        this.dragonBone.dragonAtlasAsset = res;
        this.dragonBone.armatureName = 'armatureName';
        this.dragonBone.playAnimation('stand', 0);
    }
});
